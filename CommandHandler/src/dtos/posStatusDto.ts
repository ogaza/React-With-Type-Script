export interface PosStatusDto {
  meta?: string;
  basket?: BasketDto;
  /**
   * @description Contains a list of summary information for all open (active or parked) baskets of the POS
   */
  openBaskets?: OpenBasketEntryDto[];
  /**
   * @description A list of print information. Only filled in case anything should be printed.
   */
  printInformation?: PrintInformationDto[];
}

export interface BasketDto {}
export interface OpenBasketEntryDto {}
export interface PrintInformationDto {}
