function $(selector: string) {
  return document.querySelector(selector);
}

const epTitle = $("#epTitle");
const vidPlayer = $(".video") as HTMLVideoElement;
const nextBtn = $("#next");
const prevBtn = $("#prev");
const subtitles = $("#subtitles") as HTMLTrackElement;

let currentEpisode = 1;

vidPlayer.src = `https://juyjuy3.online/One-Piece.Ep${currentEpisode}.mp4`;
subtitles.src = `/subtitles/ep${currentEpisode}.vtt`;

if (epTitle) {
  epTitle.textContent = "Playing, Episode 1";
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    if (currentEpisode != 8) {
      vidPlayer.src = `https://juyjuy3.online/One-Piece.Ep${++currentEpisode}.mp4`;
      subtitles.src = `/subtitles/ep${currentEpisode}.vtt`;
      if (epTitle) {
        epTitle.textContent = `Playing, Episode ${currentEpisode}`;
      }
    } else {
      alert("There is no episode after this");
    }
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    if (currentEpisode != 1) {
      vidPlayer.src = `https://juyjuy3.online/One-Piece.Ep${--currentEpisode}.mp4`;
      subtitles.src = `/subtitles/ep${currentEpisode}.vtt`;
      if (epTitle) {
        epTitle.textContent = `Playing, Episode ${currentEpisode}`;
      }
    } else {
      alert("There is no episode before this");
    }
  });
}

for (let i = 1; i <= 8; i++) {
  $(`#ep${i}`)?.addEventListener("click", () => {
    currentEpisode = i;
    vidPlayer.src = `https://juyjuy3.online/One-Piece.Ep${i}.mp4`;
    subtitles.src = `/subtitles/ep${i}.vtt`;
    if (epTitle) {
      epTitle.textContent = `Playing, Episode ${i}`;
    }
  });
}
