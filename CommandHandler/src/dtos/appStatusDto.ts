export interface AppStatusDto {
  meta?: string;
  task?: TaskDto;
  /**
   * @description Contains a list of summary information for all open (active or parked) tasks of the POS
   */
  openTasks?: OpenTaskEntryDto[];
  /**
   * @description A list of print information. Only filled in case anything should be printed.
   */
  printInformation?: PrintInformationDto[];
}

export interface TaskDto {}
export interface OpenTaskEntryDto {}
export interface PrintInformationDto {}
