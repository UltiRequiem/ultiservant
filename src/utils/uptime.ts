import { uptime } from "os";

function pad(s: number) {
  return (s < 10 ? "0" : "") + s;
}

function format(seconds: number) {
  const hours = Math.floor(seconds / (60 * 60));
  const minutes = Math.floor((seconds % (60 * 60)) / 60);
  const parsedSeconds = Math.floor(seconds % 60);

  return pad(hours) + ":" + pad(minutes) + ":" + pad(parsedSeconds);
}

// TODO: CLEAN UP
// taken from https://github.com/pranshu05/Elpha/blob/main/commands/botinfo.js
export function timeCon(time: number) {
  time = time * 1000;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  days = Math.floor(time / 86400000);
  time -= days * 86400000;
  hours = Math.floor(time / 3600000);
  time -= hours * 3600000;
  minutes = Math.floor(time / 60000);
  time -= minutes * 60000;
  seconds = Math.floor(time / 1000);
  time -= seconds * 1000;

 const days2 = `${ days > 9 ? days : "" + days}`;
 const hours2 =`${ hours > 9 ? hours : "" + hours}`;
 const minutes2 = `${minutes > 9 ? minutes : "" + minutes}`
  const seconds2 = `${seconds > 9 ? seconds : "" + seconds}`;

  return (
    (parseInt(days2) > 0 ? days + " days " : " ") +
    (parseInt(hours2) === 0 && parseInt(days2) === 0 ? "" : hours2 + " hours ") +
    minutes2 +
    " minutes " +
    seconds2 +
    " seconds."
  );
}

export function uptimeHumanFormat() {
  return timeCon(uptime());
}
