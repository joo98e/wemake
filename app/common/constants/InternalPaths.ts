export default class InternalPaths {
  static readonly PROFILE = new InternalPaths("/my/profile", "Profile", "프로필");

  constructor(
    readonly path: string,
    readonly as: string,
    readonly desc: string
  ) {}
}
