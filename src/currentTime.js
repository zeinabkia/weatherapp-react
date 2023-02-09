import { useEffect, useState } from "react";

export default function CurrentTime() {
  let [now, setNow] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
    }, 1000);
  }, []);

  let currentDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let Day = currentDay[now.getDay()];
  let months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[now.getMonth()];
  let year = now.getUTCFullYear();
  let exactDay = now.getDate();
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let min = now.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }
  let second = now.getSeconds();
  if (second < 10) {
    second = `0${second}`;
  }

  return `${hour}:${min}:${second} ${Day}, ${month} ${exactDay}, ${year}`;
}
