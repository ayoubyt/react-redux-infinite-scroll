import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../../components/modal";
import UserProfileCard from "../../components/user-profile-card";
import { RootState } from "../../redux/stroreConfig";
import { getUser } from "../../api/users";
import { hideProfile } from "../../redux/slices/users";


const UserProfileModal: React.FC = () => {
  const selectedProfileId = useSelector(
    (state: RootState) => state.users.selectedProfile
  );

  const dispatch = useDispatch();

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedProfileId) {
      setLoading(true);
      getUser(selectedProfileId).then((user) => {
        setUserData(user);
        setLoading(false);
      });
    }
  }, [selectedProfileId]);

  const handleClose = () => {
    dispatch(hideProfile());
  };

  const showModal = !!selectedProfileId && !!userData;

  return (
    <div>
      <Modal loading={loading} handleClose={handleClose} show={showModal}>
        <UserProfileCard user={userData} />
      </Modal>
    </div>
  );
};

export default UserProfileModal;
