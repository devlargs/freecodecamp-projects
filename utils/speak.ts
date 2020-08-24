export default (message: string) => {
  var msg = new SpeechSynthesisUtterance(message);
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices.filter((q) => q.lang === "en-US")[0];
  window.speechSynthesis.speak(msg);
};
