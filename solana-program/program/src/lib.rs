//! A Solana program for discarding unwanted tokens

#![warn(missing_docs)]

pub mod error;
pub mod instruction;
pub mod processor;

#[cfg(not(feature = "no-entrypoint"))]
mod entrypoint;