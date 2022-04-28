//! Error types

use num_derive::FromPrimitive;
use solana_program::{decode_error::DecodeError, program_error::ProgramError};
use thiserror::Error;

/// Errors that may be returned by the program.
#[derive(Clone, Debug, Eq, Error, FromPrimitive, PartialEq)]
pub enum TrashpileError {
    /// Invalid dump amount
    #[error("Invalid dump amount")]
    InvalidDumpAmount,
    /// Invalid instruction number passed in.
    #[error("Invalid instruction")]
    InvalidInstruction,
}

impl From<TrashpileError> for ProgramError {
    fn from(e: TrashpileError) -> Self {
        ProgramError::Custom(e as u32)
    }
}

impl<T> DecodeError<T> for TrashpileError {
    fn type_of() -> &'static str {
        "Trashpile Error"
    }
}