import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Contents } from '../../../components/admin/student/StudentList'
import { getAgName, getClassList } from '../../../modules/admin/student/student'
 
const StudentListContainer = ({test}) => {

  const dispatch = useDispatch();

  const { agName, classList } = useSelector(({ student }) => ({
    agName: student.agName,
    classList: student.classList,
  }))

  const u_phone = '01023454710'

  useEffect(() => {
    dispatch(getAgName(u_phone));
    dispatch(getClassList(u_phone));
  }, []);

  const onSearch = () => {
    
  }

  return (
      <Contents
         agName={agName}
         classList={classList}
      />
  );
};

export default StudentListContainer;