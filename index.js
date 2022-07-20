console.log("welcome to CV Scanner Project");
//"https://randomuser.me/api/portraits/men/75.jpg"

const data = [
  {
    name: "Ravi Sharan",
    age: "21",
    city: "Gopalganj",
    language: "javaScript",
    frameWork: "Django",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Hari Priya",
    age: "20",
    city: "Delhi",
    language: "javaScript",
    frameWork: "Django",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    name: "Somya",
    age: "16",
    city: "Chapra",
    language: "javaScript",
    frameWork: "BootStrap",
    image: "https://randomuser.me/api/portraits/women/76.jpg",
  },
  {
    name: "Siya",
    age: "12",
    city: "Patna",
    language: "javaScript",
    frameWork: "Flask",
    image: "https://randomuser.me/api/portraits/women/77.jpg",
  },
];

// CV iterator
function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: () => {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

// button listener for next button
const candidates = cvIterator(data);
nextCV();

const next = document.getElementById("next");

next.addEventListener("click", nextCV);

function nextCV() {
  const currentCandidate = candidates.next().value;
  let image = document.getElementById("image");
  let profile = document.getElementById("profile");

  if (currentCandidate != undefined) {
    image.innerHTML = `<image src="${currentCandidate.image}">`;
    profile.innerHTML = `<ul class="list-group">
            <li class="list-group-item">Name: ${currentCandidate.name}</li>
            <li class="list-group-item">Age: ${currentCandidate.age}</li>
            <li class="list-group-item">City: ${currentCandidate.city}</li>
            <li class="list-group-item">Language: ${currentCandidate.language}</li>
            <li class="list-group-item">FrameWork: ${currentCandidate.frameWork}</li>
            </ul>`;
  } else {
    alert("End of Applications");
    window.location.reload();
  }
}
