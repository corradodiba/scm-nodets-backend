import bcrypt from "bcryptjs";

export const hashedPwd = async (password: string): Promise<string> => {
  try {
    return await bcrypt.hash(password, 10);
  } catch (err) {
    throw err;
  }
};

export const comparePwd = async (
  password: string,
  hashPwd: string
): Promise<boolean> => {
  try {
    return await bcrypt.compare(password, hashPwd);
  } catch (err) {
    throw err;
  }
};
