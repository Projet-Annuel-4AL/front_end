
export class Follow {
  readonly idFollow: number;
  readonly idUserFollowing: number;
  readonly idUserFollowed: number;


  constructor(idFollow: number, idUserFollowing: number, idUserFollowed: number) {
    this.idFollow = idFollow;
    this.idUserFollowing = idUserFollowing;
    this.idUserFollowed = idUserFollowed;
  }
}
