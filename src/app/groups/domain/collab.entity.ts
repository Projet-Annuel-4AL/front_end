import {Code} from "../../post/post-body/domain/code.entity";

export class CollabEntity{
  readonly id: number;
  readonly idGroup: number;
  readonly code: Code;

  constructor(id: number, idGroup: number, code: Code) {
    this.id = id;
    this.idGroup = idGroup;
    this.code = code;

  }
}
