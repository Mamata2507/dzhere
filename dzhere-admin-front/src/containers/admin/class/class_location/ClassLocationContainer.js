import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getClasslocationList } from "../../../../lib/api/class/course";
import { getClasslocation } from "../../../../modules/admin/class/course";
import ClassLocationComponent from "../../../../components/admin/class/class_location/ClassLocationComponent";

const ClassLocationContainer = () => {
  const dispatch = useDispatch();
  const [classlocationList, setClasslcoationList] = useState(null);
  const agency = useSelector(({ classes }) => classes.agency);

  console.log(agency);
  async function classlocationListApi() {
    console.log("강의 장소 리스트 불러오기");
    const data = await getClasslocationList({ ag_idx: agency.ag_idx });
    console.log(data);
    setClasslcoationList(data);
    dispatch(getClasslocation(classlocationList));
  }

  useEffect(() => {
    classlocationListApi();
    console.log(classlocationList);
  }, []);


  return (
    <ClassLocationComponent
      agency={agency.ag_name}
      classList={classlocationList}
    />
  );
};

export default ClassLocationContainer;
