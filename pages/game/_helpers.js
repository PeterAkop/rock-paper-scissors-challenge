export const play = (gesture) =>
  fetch("/api/rounds", {
    method: "POST",
    body: JSON.stringify({ gesture }),
  }).then((response) => {
    // Adding some minimum error handling
    if (!response.ok) {
      throw new Error("failed to fetch game result");
    }
    return response.json();
  });
