export class CreateFollowDto {
  readonly idUserFollowing: number;
  readonly idUserFollowed: number;

  constructor(idUserFollowing: number, idUserFollowed: number) {
    this.idUserFollowing = idUserFollowing;
    this.idUserFollowed = idUserFollowed;
  }
}
