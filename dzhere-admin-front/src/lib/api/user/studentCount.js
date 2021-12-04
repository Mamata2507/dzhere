import client from "../client";
const teacherUrl = "/api/admin/m/student";

export const getStudentCount = async (item) => {
  return await client.post(`${teacherUrl}/count`, {});
};
