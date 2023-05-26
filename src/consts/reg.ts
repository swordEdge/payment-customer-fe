export const PASSWORD_VALIDATION = {
  LENGTH: /^(.{8,})$/,
  UPPERCASE: /^(.*[A-Z].*)$/,
  NUMBER: /^(.*\d.*)$/,
  SPECIAL: /^(.*\W.*)$/,
};

export const EMAIL_VALIDATION = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
