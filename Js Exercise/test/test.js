//check if writing to localStorage can become aSynchronies. spoiler: it's not. the window objects makes it synchronies
localStorage.clear();
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("timer-end");
      resolve("resolved");
    }, 2000);
  });
}

function localStor() {
  return new Promise((resolve) => {
    localStorage.setItem("a", "a");
    console.log("item is set");
    resolve("resolve");
  });
}

async function asyncCall() {
  console.log("calling");
  const result = localStor();
  //   console.log(localStorage);
  console.log("end");
}

asyncCall();
