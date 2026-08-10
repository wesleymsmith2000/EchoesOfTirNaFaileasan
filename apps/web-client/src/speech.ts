export class BrowserSpeechNarrator {
  private enabled = false;

  isAvailable(): boolean {
    return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
  }

  isEnabled(): boolean {
    return this.enabled;
  }

  setEnabled(enabled: boolean): void {
    this.enabled = enabled && this.isAvailable();

    if (!this.enabled) {
      window.speechSynthesis?.cancel();
    }
  }

  speak(text: string): void {
    if (!this.enabled || !this.isAvailable()) {
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.92;
    utterance.pitch = 0.85;
    utterance.volume = 0.9;

    window.speechSynthesis.speak(utterance);
  }
}
