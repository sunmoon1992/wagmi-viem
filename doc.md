# nft store contract interface

DEV 配置
program_id_dev: FXGypTfQELi8YE5v4AEgrB1zHLFYVNJ5yAYcGnV5vHZB
config_info:3XtgZrQb9aQHm2iW8qeTrR1xamKBAbytzqXdtyVgHZB3
collection_mint:H8FrtEmi9K7rjNm5dYUZm2ze8ueT7BCnqib5v4bK5Ute
collection_metadata:DYN8pp7P1QMziRoPjsW2KwEReJkjLMuYC3q8W3dr1LUi
collection_edition:9VzQQHUFdp4z8ndyTRHWvbXuFqJicRFvvvwJhfqxp9Qr
collection_authority_record:5g3X4w4ndPjEdb5WpS8KhuZBiPT6gKPJASsyDRddcKm4
pda_creator：4j4jvrFXQHiA6c7krpbQgVyqwaczuTdhoFfwz2MfrVh6
charge_address:XYJ5UyjL1ukmE1kR7hmKYqRT4zV7rJJfMXkys1kd6Lu //收款地址

主网配置：

## Instruction Call

```
pub enum AppInstruction {
    ...
    ...
    Mint,
    WhitelistMint(WhitelistArgs)
}
```

### Mint() 

public mint nft

| AccountInfo  | is_signer | is_writable |                                                              |
| ------------ | --------- | ----------- | ------------------------------------------------------------ |
| signer       | **true**  | false       | 钱包地址                                                       |
| config_info   | false  | **true**    | 读取配置                  |
| pda_creator  | false     | **true**    | 读取配置 |
| mint         | **true**  | **true**    | nft new_mint                                          |   
| metadata    | false     | **true**     |pda ["metadata", metadata_program, mint]               |
| edition     | false     | **true**    | pda ["metadata", metadata_program, mint, "edition"]     |
| collection_mint  | false  | false    | 读取配置                                             |
| collection_metadata    | false | **true**  | 读取配置      |
| collection_edition     | false | **true**  | 读取配置 |
| collection_authority_record | false  | **true** | 读取配置 |
| charge_address | false     | **true**     |   读取配置            |
| user_info       | false  | **true**    | pda = [program_id, signer_info, "user_info"]                  |  
| metadata_program    | false     | false    | 系统metadata program                                         |
| token_program | false     | false       | 系统token program                                             |
| rent         | false     | false       | 系统rent program                                              |
| system       | false     | false       | 系统 system program                                          |

```
指令下标：2

指令参数：无

```

### Whitelist Mint() 

whitelist mint nft

| AccountInfo  | is_signer | is_writable |                                                              |
| ------------ | --------- | ----------- | ------------------------------------------------------------ |
| signer       | **true**  | false       | 钱包地址                                                       |
| config_info   | false  | **true**    | 读取配置                  |
| pda_creator  | false     | **true**    | 读取配置 |
| mint         | **true**  | **true**    | nft new_mint                                          |   
| metadata    | false     | **true**     |pda ["metadata", metadata_program, mint]               |
| edition     | false     | **true**    | pda ["metadata", metadata_program, mint, "edition"]     |
| collection_mint  | false  | false    | 读取配置                                             |
| collection_metadata    | false | **true**  | 读取配置      |
| collection_edition     | false | **true**  | 读取配置 |
| collection_authority_record | false  | **true** | 读取配置 |
| charge_address | false     | **true**     |   读取配置             |
| user_info       | false  | **true**    | pda = [program_id, signer_info, "user_info"]                  |  
| metadata_program    | false     | false    | 系统metadata program                                        |
| token_program | false     | false       | 系统token program                                             |
| rent         | false     | false       | 系统rent program                                                 |
| system       | false     | false       | 系统 system program                                             |


```
指令下标：3

指令参数：
pub struct WhitelistArgs {
    /// Merkle tree proof
    pub proof: Vec<[u8; 32]>,
}

```

### 查询全局配置

```
数据结构：
pub struct ConfigureData {
    /// Contract admin
    pub authority: Pubkey,
    pub sale_price: u64,
    pub start_ts: u64,
    pub char_addr: Pubkey,
    pub total_supply : u64,
    pub collection_mint: Pubkey,
    /// creators
    pub creators: Vec<Creator>,
    /// seller fee
    pub fee: u16,
    /// nft name
    pub name: String,
    /// nft symbol
    pub symbol: String,
    /// default uri
    pub uri: String,
    ///merkle root
    pub root: [u8; 32],
}
```

### 查询用户mint数量

```
数据结构：
pub struct UserData {
    pub minted: u8,
}
```