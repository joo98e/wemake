const InternalPaths = {
  NOTIFICATIONS: {
    path: "/notifications",
    as: "Notifications",
    desc: "공지사항",
  },
  MESSAGES: {
    path: "/messages",
    as: "Messages",
    desc: "메시지",
  },
  PROFILE: {
    path: "/my/profile",
  },
  JOB: {
    path: "/job",
    as: "Job",
    desc: "공고",
  },
  DASHBOARD: {
    path: "/my/dashboard",
    as: "Dashboard",
    desc: "대시보드",
  },
  PRODUCT: {},
  IDEAS_GPT: {
    path: "/community",
    as: "Ideas GPT",
    desc: "아이디어 GPT",
  },
  SETTINGS: {
    path: "/my/settings",
    as: "Settings",
    desc: "설정",
  },
  DISCUSSIONS: {
    path: "/discussions/postId",
    as: "Discussions",
    desc: "토론",
  },
  LOGOUT: {
    path: "/logout",
    as: "Logout",
    desc: "로그아웃",
  },
} as const;

export default InternalPaths;
