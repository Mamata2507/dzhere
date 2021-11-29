import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getClasstimeList } from '../../../../lib/api/class/course';
import { getClasstime } from '../../../../modules/admin/class/course';
import ClassManageAndroid from '../../../../components/admin/class/class_manage/ClassManageAndroid';
import { Alert } from 'react-native';

const ClassManageAndroidContainer = () => {
  const dispatch = useDispatch();
  const [classtimeList, setClasstimeList] = useState(null); 
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
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

  // 페이지에서 등록 버튼 누를 때
  const onModalShow = () => {
    setVisible(true);
  }

    // 모달에서 등록 버튼 누를 때
    const onSubmit = () => {
      // Alert.alert("등록");
      setVisible(false);
    }

    const onChangeText = (value) => {
      setText(value);
    }

  return (
      <ClassManageAndroid
      agency={agency.ag_name}
      classList={classtimeList}
      onModalShow={onModalShow}
      visible={visible}
      onSubmit={onSubmit}
      onChangeText={onChangeText}
      value={text}
      />
  );
};

export default ClassManageAndroidContainer;
