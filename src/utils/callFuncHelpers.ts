import { PublicKey } from '@solana/web3.js'
import { Buffer } from 'buffer'

// pda 找程序地址
export const pda = (seeds: Buffer[], programId: PublicKey) => {
  const [address] = PublicKey.findProgramAddressSync(seeds, programId)
  return address
}

export const minPublicKeyConfig = {
  program_id_dev: new PublicKey('FXGypTfQELi8YE5v4AEgrB1zHLFYVNJ5yAYcGnV5vHZB'),
  config_info: new PublicKey('3XtgZrQb9aQHm2iW8qeTrR1xamKBAbytzqXdtyVgHZB3'),
  collection_mint: new PublicKey('H8FrtEmi9K7rjNm5dYUZm2ze8ueT7BCnqib5v4bK5Ute'),
  collection_metadata: new PublicKey('DYN8pp7P1QMziRoPjsW2KwEReJkjLMuYC3q8W3dr1LUi'),
  collection_edition: new PublicKey('9VzQQHUFdp4z8ndyTRHWvbXuFqJicRFvvvwJhfqxp9Qr'),
  collection_authority_record: new PublicKey('5g3X4w4ndPjEdb5WpS8KhuZBiPT6gKPJASsyDRddcKm4'),
  pda_creator: new PublicKey('4j4jvrFXQHiA6c7krpbQgVyqwaczuTdhoFfwz2MfrVh6'),
  charge_address: new PublicKey('XYJ5UyjL1ukmE1kR7hmKYqRT4zV7rJJfMXkys1kd6Lu'),
  metadata_program: new PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s')
}
