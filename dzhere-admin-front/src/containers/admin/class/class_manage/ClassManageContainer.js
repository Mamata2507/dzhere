import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getClasstimeList } from '../../../../lib/api/class/course';
import { getClasstime } from '../../../../modules/admin/class/course';
import ClassManageAndroid from '../../../../components/admin/class/class_manage/ClassManageAndroid';

const ClassManageContainer = () => {
  const dispatch = useDispatch();
  const [classtimeList, setClasstimeList] = useState(null); 
  const agency = useSelector(({ classes }) => classes.agency);
  
  console.log(agency);
  async function classtimeListApi() {
    console.log('강의 리스트 불러오기');
    const data = await getClasstimeList({ ag_idx: agency.ag_idx });
    console.log(data);
    setClasstimeList(data);
    dispatch(getClasstime(classtimeList));
  }

  useEffect(() => {
    classtimeListApi();
    console.log(classtimeList);
  }, []);

  return (
      <ClassManageAndroid
      agency={agency.ag_name}
      classList={classtimeList}
      />
  );
};

export default ClassManageContainer;