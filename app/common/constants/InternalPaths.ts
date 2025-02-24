export default class InternalPaths {
  static readonly NOTIFICATIONS = new InternalPaths(
    "/notifications",
    "Notifications",
    "공지사항"
  );

  static readonly MESSAGES = new InternalPaths(
    "/messages",
    "Messages",
    "메시지"
  );

  static readonly PROFILE = new InternalPaths(
    "/my/profile",
    "Profile",
    "프로필"
  );

  static readonly DASHBOARD = new InternalPaths(
    "/my/dashboard",
    "Dashboard",
    "대시보드"
  );

  static readonly SETTINGS = new InternalPaths(
    "/my/settings",
    "Settings",
    "설정"
  );

  static readonly DISCUSSIONS = new InternalPaths(
    "/discussions/postId",
    "Discussions",
    "토론"
  );

  static readonly LOGOUT = new InternalPaths("/logout", "Logout", "로그아웃");

  constructor(
    readonly path: string,
    readonly as: string,
    readonly desc: string
  ) {}
}
