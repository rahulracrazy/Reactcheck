import MeetupList from "../components/layout/meetupscomp/meetuplist";
import { useState, useEffect } from "react";

function Allmeetups() {
  const [isLoading, setisLoading] = useState(true);
  const [Datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("https://react-009-5bab0-default-rtdb.firebaseio.com/meetup.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setisLoading(false);
        setDatas(meetups);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <h1>All Meetups Page</h1>
      <div>
        <MeetupList object={Datas} />
      </div>
    </section>
  );
}

export default Allmeetups;