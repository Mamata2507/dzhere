import client from "../client";
const teacherUrl = "student";

export const getStudentCount = async (item) => {
  return await client.post(`${teacherUrl}/count`, {
    ag_idx:item.ag_idx,
    c_idx:item.c_idx,
  });
};
