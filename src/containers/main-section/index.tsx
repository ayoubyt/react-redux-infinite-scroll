import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as Styled from "./styled-components";
import { RootState } from "../../redux/stroreConfig";
import { requestUsers } from "../../redux/slices/users";
import UserCard from "../../components/user-card";
import UserProfileModal from "../user-profile-modal";

const USERS_PER_PAGE = 8;

export default function MainSection() {
  const { isLoading, isError, data } = useSelector(
    (state: RootState) => state.users
  );
  const dispatch = useDispatch();

  /**
   * intersection observer designed to observe the last card in the collection
   * if it's 100% visible, we request more cards to be showed
   */
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        // just one element meant to be observed
        const lastCard = entries[0];
        if (lastCard.isIntersecting) {
          dispatch(requestUsers({ limit: USERS_PER_PAGE }));
        }
      },
      {
        threshold: 1
      }
    )
  );

  let [lastCard, setLastCard] = useState<HTMLElement | null>(null);

  /**
   * register dom element reference if its the last card
   * in the collection
   */
  const selectIfLastCard = (domElem: HTMLElement | null, index: number) => {
    if (index === data.length - 1 && domElem) {
      setLastCard(domElem);
    }
  };

  useEffect(() => {
    dispatch(requestUsers({ limit: USERS_PER_PAGE }));
  }, [dispatch]);

  /**
   * register an observer to observe last box visibility
   * when it is 100% visible, it calls a callback function to
   * trigger a request for more cards
   */
  useEffect(() => {
    const observerObj = observer.current;

    if (lastCard) observerObj.observe(lastCard);
    return () => {
      if (lastCard) observerObj.unobserve(lastCard);
    };
  }, [lastCard]);

  if (isError) return <h1 style={{ color: "red" }}>Error</h1>;
  return (
    <>
      <Styled.Container>
        <UserProfileModal />
        {data.map((u, index) => (
          <UserCard
            key={u.id}
            id={u.id}
            name={`${u.firstName} ${u.lastName}`}
            pictureUrl={u.picture}
            ref={(domElem: HTMLElement | null) =>
              selectIfLastCard(domElem, index)
            }
          />
        ))}
      </Styled.Container>
      {isLoading && <h1>Loading...</h1>}
    </>
  );
}
