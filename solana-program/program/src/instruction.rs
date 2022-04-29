//! Instruction types

use crate::error::TrashpileError;
use solana_program::program_error::ProgramError;
use std::mem::size_of;

/// Dump instruction data
pub struct Dump {
    /// amount to dump
    pub amount: u64,
}

/// Instructions supported by the trashpile program
pub enum TrashpileInstruction {
    /// Receives token to be dumped into trashpile, exchanges $TRASH
    /// 
    /// Expects the following accounts:
    /// 0. `[]` token to dump mint
    /// 1. `[writable, signer]` token to dump owner and funder
    /// 2. `[writable]` token to dump source
    /// 3. `[writable]` token to dump destination
    /// 4. `[writable]` trash token mint
    /// 5. `[]` trash token mint authority
    /// 6. `[writable]` trash token destination
    /// 7. `[]` token program
    Dump(Dump),
}


impl TrashpileInstruction {
    /// Unpacks a byte buffer into a [TrashpileInstruction](enum.TrashpileInstruction.html).
    pub fn unpack(input: &[u8]) -> Result<Self, ProgramError> {
        let (&tag, rest) = input.split_first().ok_or(TrashpileError::InvalidInstruction)?;
        Ok(match tag {
            0 => {
                let (amount, _rest) = Self::unpack_u64(rest)?;
                Self::Dump(Dump {
                    amount,
                })
            }
            _ => return Err(TrashpileError::InvalidInstruction.into()),
        })
    }

    fn unpack_u64(input: &[u8]) -> Result<(u64, &[u8]), ProgramError> {
        if input.len() >= 8 {
            let (amount, rest) = input.split_at(8);
            let amount = amount
                .get(..8)
                .and_then(|slice| slice.try_into().ok())
                .map(u64::from_le_bytes)
                .ok_or(TrashpileError::InvalidInstruction)?;
            Ok((amount, rest))
        } else {
            Err(TrashpileError::InvalidInstruction.into())
        }
    }

    /// Packs a [TrashpileInstruction](enum.TrashpileInstruction.html) into a byte buffer.
    pub fn pack(&self) -> Vec<u8> {
        let mut buf = Vec::with_capacity(size_of::<Self>());
        match &*self {
            Self::Dump(Dump {
                amount,
            }) => {
                buf.push(0);
                buf.extend_from_slice(&amount.to_le_bytes());
            }       
        }
        buf
    }
}