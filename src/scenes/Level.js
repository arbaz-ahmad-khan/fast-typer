
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// homeBg
		const homeBg = this.add.image(540, 960, "homeBg");
		homeBg.alpha = 0.5;
		homeBg.alphaTopLeft = 0.5;
		homeBg.alphaTopRight = 0.5;
		homeBg.alphaBottomLeft = 0.5;
		homeBg.alphaBottomRight = 0.5;

		// container_gamePlay
		const container_gamePlay = this.add.container(0, 0);

		// container_gameOver
		const container_gameOver = this.add.container(0, 0);
		container_gameOver.visible = false;

		// transparent_bg
		const transparent_bg = this.add.image(540, 960, "transparent-bg");
		transparent_bg.alpha = 0.5;
		transparent_bg.alphaTopLeft = 0.5;
		transparent_bg.alphaTopRight = 0.5;
		transparent_bg.alphaBottomLeft = 0.5;
		transparent_bg.alphaBottomRight = 0.5;
		container_gameOver.add(transparent_bg);

		// text_1
		const text_1 = this.add.text(540, 437, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Time's up!";
		text_1.setStyle({ "fontFamily": "Arial", "fontSize": "100px", "fontStyle": "bold" });
		container_gameOver.add(text_1);

		// text_score
		const text_score = this.add.text(540, 860, "", {});
		text_score.setOrigin(0.5, 0.5);
		text_score.text = "Score:0";
		text_score.setStyle({ "fontFamily": "Arial", "fontSize": "60px" });
		container_gameOver.add(text_score);

		// text_best
		const text_best = this.add.text(540, 990, "", {});
		text_best.setOrigin(0.5, 0.5);
		text_best.text = "Best:0";
		text_best.setStyle({ "fontFamily": "Arial", "fontSize": "60px" });
		container_gameOver.add(text_best);

		// playAgain
		const playAgain = this.add.image(540, 1250, "playAgain");
		container_gameOver.add(playAgain);

		// homeBtn
		const homeBtn = this.add.image(540, 1420, "homeBtn");
		container_gameOver.add(homeBtn);

		// keyboard
		const keyboard = this.add.image(540, 1400, "keyboard");

		this.homeBg = homeBg;
		this.container_gamePlay = container_gamePlay;
		this.text_score = text_score;
		this.text_best = text_best;
		this.playAgain = playAgain;
		this.homeBtn = homeBtn;
		this.container_gameOver = container_gameOver;
		this.keyboard = keyboard;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	homeBg;
	/** @type {Phaser.GameObjects.Container} */
	container_gamePlay;
	/** @type {Phaser.GameObjects.Text} */
	text_score;
	/** @type {Phaser.GameObjects.Text} */
	text_best;
	/** @type {Phaser.GameObjects.Image} */
	playAgain;
	/** @type {Phaser.GameObjects.Image} */
	homeBtn;
	/** @type {Phaser.GameObjects.Container} */
	container_gameOver;
	/** @type {Phaser.GameObjects.Image} */
	keyboard;

	/* START-USER-CODE */

	// Write more your code here
	create() {
		this.editorCreate();
		this.input.setDefaultCursor('default');
		this.levelManager = new LevelManager();
		this.timerDuration = 0;
		this.keyboard.setInteractive();
		this.keyboard.setVisible(false);
		this.score = 0;
		this.levelTargetScore = 0;
		this.best = parseInt(localStorage.getItem('fast-typer-best')) || 0;
		this.currentWordIndex = 0;
		this.currentLetterIndex = 0;
		this.currentWord = '';
		this.wordDisplay = null;
		this.letterDisplays = [];
		this.displayedWords = [];
		this.keyboardEnabled = true;
		this.totalWords = 0;
		this.gameEnded = false;
		this.currentLevel = 1;
		this.loadTimerDuration(this.currentLevel);
		this.levelText = this.add.text(540, 70, 'Level - ' + this.currentLevel, { fontFamily: 'Arial', fontSize: 84, color: '#ffffff' }).setOrigin(0.5);
		this.levelText.setStroke('#000000', 3);
		this.levelText.setFontStyle('bold');
		this.container_gamePlay.add(this.levelText);
		this.scoreText = this.add.text(20, 20, 'Score: 0', { fontFamily: 'Arial', fontSize: 64, color: '#ffffff' });
		this.scoreText.setStroke('#000000', 3);
		this.container_gamePlay.add(this.scoreText);
		this.highScoreText = this.add.text(20, 1830, 'Best: ' + this.best, { fontFamily: 'Arial', fontSize: 64, color: '#ffffff' });
		this.highScoreText.setStroke('#000000', 3);
		this.container_gamePlay.add(this.highScoreText);
		this.timerText = this.add.text(810, 20, 'Time: 60', { fontFamily: 'Arial', fontSize: 64, color: '#ffffff' });
		this.timerText.setStroke('#000000', 3);
		this.container_gamePlay.add(this.timerText);
		this.typeThisText = this.add.text(540, 800, 'Type this:', { fontFamily: 'Arial', fontSize: 72, color: '#ffffff' }).setOrigin(0.5);
		this.typeThisText.setStroke('#000000', 3);
		if (this.sys.game.device.os.android || this.sys.game.device.os.iOS) {
			this.typeThisText.y = 500;
		}
		this.container_gamePlay.add(this.typeThisText);
		this.typeThisText.visible = false;

		this.words = this.levelManager.levelData[this.currentLevel].words;
		this.totalWords = this.words.length;

		// Countdown
		this.countdownText = this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2, '3', { fontFamily: 'Arial', fontSize: 180, color: '#ffffff' });
		this.countdownText.setStroke('#000000', 3);
		this.countdownText.setOrigin(0.5);

		let countdown = 2;
		const countdownInterval = setInterval(() => {
			if (countdown === 0) {
				this.countdownText.setText('Go!');
			} else {
				this.countdownText.setText(countdown.toString());
			}
			countdown--;
			if (countdown < -1) {
				clearInterval(countdownInterval);
				this.displayLevelMessage();
				this.isMobileDevice = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i);
				this.openKeyboardOnMobile();
				this.typeThisText.setVisible(true);
				this.countdownText.setVisible(false);
				this.displayNextWord();
				if (!this.isMobileDevice && !this.sys.game.device.os.iOS) {
					this.input.keyboard.on('keydown', this.handleKeyDown, this);
				}
			}
		}, 1000);
	}
	displayNextWord() {
		this.keyboardEnabled = true;
		this.currentWord = this.getWordToDisplay();
		this.letterDisplays.forEach(letter => letter.destroy());
		this.letterDisplays = [];

		const letterSpacing = 10;
		let totalLetterWidth = 0;
		for (let i = 0; i < this.currentWord.length; i++) {
			let letterWidth;
			if (this.currentWord[i] === ' ') {
				letterWidth = 32;
			} else {
				const testText = this.add.text(0, 0, this.currentWord[i], { fontFamily: 'Arial', fontSize: 100, color: '#ffffff' });
				letterWidth = testText.width;
				testText.destroy();
			}
			totalLetterWidth += letterWidth;
		}

		const startX = (this.sys.game.config.width - totalLetterWidth - letterSpacing * (this.currentWord.length - 1)) / 2;
		let currentX = startX;
		for (let i = 0; i < this.currentWord.length; i++) {
			let letterWidth;
			if (this.currentWord[i] === ' ') {
				letterWidth = 32;
			} else {
				const testText = this.add.text(0, 0, this.currentWord[i], { fontFamily: 'Arial', fontSize: 100, color: '#ffffff' });
				letterWidth = testText.width;
				testText.destroy();
			}

			const letter = this.add.text(currentX, 920, this.currentWord[i], { fontFamily: 'Arial', fontSize: 120, color: '#ffffff' }).setAlign('center');
			letter.setStroke('#000000', 4);
			letter.setFontStyle('bold');
			if (this.sys.game.device.os.android || this.sys.game.device.os.iOS) {
				letter.y = 600;
			}
			this.container_gamePlay.add(letter);
			this.letterDisplays.push(letter);
			currentX += letterWidth + letterSpacing;
		}
		this.wordsDisplayed++;
	}

	getWordToDisplay() {
		const words = this.levelManager.levelData[this.currentLevel].words;
		const remainingWords = words.filter(word => !this.displayedWords.includes(word));
		if (remainingWords.length === 0) {
			this.nextLevel();
			this.gameEnded = false;
			this.displayedWords.length = 0;
			return this.getWordToDisplay();
		}

		const randomIndex = Math.floor(Math.random() * remainingWords.length);
		const word = remainingWords[randomIndex];
		this.displayedWords.push(word);
		return word;
	}

	handleKeyDown(event) {
		if (!this.gameEnded && this.keyboardEnabled) {
			const typedLetter = event.key;
			if (/^[a-zA-Z]$/.test(typedLetter)) {
				const correctLetter = this.currentWord[this.currentLetterIndex];
				if (typedLetter === correctLetter) {
					this.letterDisplays[this.currentLetterIndex].setTint(0x00FF00);
					this.currentLetterIndex++;

					if (this.currentLetterIndex >= this.currentWord.length) {
						// Correct letter typed
						const correctImage = this.add.sprite(540, 1140, 'correct');
						correctImage.setScale(0.5);
						if (this.sys.game.device.os.android || this.sys.game.device.os.iOS) {
							correctImage.y = 800;
						}
						this.tweens.add({
							targets: correctImage,
							scaleX: 1,
							scaleY: 1,
							duration: 400,
							ease: 'Linear',
							onComplete: () => {
								correctImage.destroy();
							}
						});

						this.score += 1;
						this.levelTargetScore += 1;
						this.scoreText.setText('Score: ' + this.score);
						this.keyboardEnabled = false;
						this.currentLetterIndex = 0;

						if (this.levelTargetScore >= this.levelManager.levelData[this.currentLevel].wordTarget) {
							this.confettiForLevelComplete();
							this.typeThisText.setVisible(false);
							this.nextLevel();
						} else {
							setTimeout(() => {
								this.displayNextWord();
								this.keyboardEnabled = true;
							}, 400);
						}
					}
				} else {
					// Wrong letter typed
					const wrongImage = this.add.sprite(540, 1140, 'wrong');
					wrongImage.setScale(0.5);
					if (this.sys.game.device.os.android || this.sys.game.device.os.iOS) {
						wrongImage.y = 800;
					}
					this.tweens.add({
						targets: wrongImage,
						scaleX: 1,
						scaleY: 1,
						duration: 500,
						ease: 'Linear',
						onComplete: () => {
							wrongImage.destroy();
						}
					});

					this.letterDisplays[this.currentLetterIndex].setTint(0xFF0000);
					this.keyboardEnabled = false;
					setTimeout(() => {
						this.displayNextWord();
						this.currentLetterIndex = 0;
						this.keyboardEnabled = true;
					}, 1500);
				}
			}
		}
	}

	nextLevel() {
		this.keyboardEnabled = false;
		this.gameEnded = true;
		this.timedEvent.remove();
		this.currentWordIndex = 0;
		this.wordsDisplayed = 0;
		this.currentLevel++;
		if (this.currentLevel > 25) {
			this.currentLevel = 1;
		}
		this.levelTargetScore = 0;
		this.levelText.setText('Level - ' + this.currentLevel);
		this.timerDuration = this.levelManager.levelData[this.currentLevel].timerDuration;
		this.timerText.setText('Time: ' + this.timerDuration);
		this.timerStarted = false;
		this.totalWords = this.words.length;
		setTimeout(() => {
			this.displayLevelMessage();
			this.keyboardEnabled = true;
			this.gameEnded = false;
			this.typeThisText.setVisible(true);
			this.displayNextWord();
		}, 3000);
	}

	startTimer() {
		this.timedEvent = this.time.addEvent({
			delay: 1000,
			callback: this.updateTimer,
			callbackScope: this,
			loop: true
		});
	}

	displayLevelMessage() {

		for (let i = 0; i < this.currentWord.length; i++) {
			this.letterDisplays[i].setVisible(false);
		}

		const levelMessage = this.add.text(540, 400, `Type ${this.levelManager.levelData[this.currentLevel].wordTarget} words in ${this.levelManager.levelData[this.currentLevel].timerDuration} seconds`, { fontFamily: 'Arial', fontSize: 64, color: '#ffffff' });
		levelMessage.setOrigin(0.5);
		levelMessage.setFontStyle('bold');
		levelMessage.setStroke('#000000', 3);

		if (this.sys.game.device.os.android || this.sys.game.device.os.iOS) {
			levelMessage.y = 300;
		}

		if (levelMessage) {
			this.tweens.add({
				targets: levelMessage,
				alpha: 0,
				duration: 1000,
				yoyo: true,
				repeat: -1,
			});
		}

		setTimeout(() => {
			const keyPressHandler = () => {
				levelMessage.destroy();
				if (!this.timerStarted) {
					this.timerStarted = true;
					this.startTimer();
				}
				this.input.keyboard.off('keydown', keyPressHandler);
			};
			this.input.keyboard.on('keydown', keyPressHandler);
		}, 3000);
	}

	loadTimerDuration(level) {
		this.timerDuration = this.levelManager.levelData[level].timerDuration;
	}

	updateTimer() {
		this.timerDuration--;
		this.timerText.setText('Time: ' + this.timerDuration);

		if (this.timerDuration === 0) {
			this.timedEvent.paused = true;
			this.keyboardEnabled = false;
			this.gameEnded = true;
			this.gameOver();
		}
	}

	gameOver() {
		this.timedEvent.remove();
		this.homeBg.setAlpha(1);
		this.keyboard.setVisible(false);
		if (this.isMobileDevice || this.sys.game.device.os.iOS) {
			this.hideKeyboard();
		}
		this.pointerOverAndOut();
		this.container_gamePlay.visible = false;
		this.text_score.setText('Score:' + this.score);
		if (this.score > this.best) {
			this.best = this.score;
			localStorage.setItem('fast-typer-best', this.best);
		}
		this.text_best.setText('Best:' + this.best);
		this.container_gameOver.visible = true;
		this.playAgain.setInteractive();
		this.playAgain.on('pointerdown', () => {
			this.score = 0;
			this.scene.restart();
		});
		this.homeBtn.setInteractive();
		this.homeBtn.on('pointerdown', () => {
			this.scene.stop('Level');
			this.scene.start('Home');
		});
	}

	pointerOverAndOut() {
		this.pointerOver = (aBtn, scale) => {
			this.input.setDefaultCursor('pointer');
			this.tweens.add({
				targets: aBtn,
				scaleX: scale + 0.05,
				scaleY: scale + 0.05,
				duration: 50
			})
		}
		this.pointerOut = (aBtn, scale) => {
			this.input.setDefaultCursor('default');
			this.tweens.add({
				targets: aBtn,
				scaleX: scale,
				scaleY: scale,
				duration: 50,
				onComplete: () => {
					aBtn.forEach((btn) => {
						btn.setScale(scale);
					});
				}
			})
		}
		this.homeBtn.on('pointerover', () => this.pointerOver([this.homeBtn], 1));
		this.homeBtn.on('pointerout', () => this.pointerOut([this.homeBtn], 1));
		this.playAgain.on('pointerover', () => this.pointerOver([this.playAgain], 1));
		this.playAgain.on('pointerout', () => this.pointerOut([this.playAgain], 1));
	}

	openKeyboardOnMobile() {
		if (this.sys.game.device.os.iOS) {
			this.keyboard.setVisible(true);
			this.input.on('pointerdown', () => {
				this.keyboard.setVisible(false);
				const inputElement = document.createElement('input');
				inputElement.type = 'text';
				inputElement.style.position = 'fixed';
				inputElement.style.top = '50px';
				inputElement.style.left = '50px';
				inputElement.style.opacity = '0';
				document.body.appendChild(inputElement);
				inputElement.focus();
				inputElement.addEventListener('input', (event) => {
					const typedLetter = event.data;
					if (typedLetter) {
						const lowercaseLetter = typedLetter.toLowerCase();
						this.handleKeyDown({ key: lowercaseLetter });
					}
				});
			});
		} else {
			if (this.sys.game.device.os.android) {
				const inputElement = document.createElement('input');
				inputElement.type = 'text';
				inputElement.style.position = 'absolute';
				inputElement.style.opacity = '0';
				document.body.appendChild(inputElement);
				inputElement.focus();
				inputElement.addEventListener('input', (event) => {
					const typedLetter = event.data;
					if (typedLetter) {
						const lowercaseLetter = typedLetter.toLowerCase();
						this.handleKeyDown({ key: lowercaseLetter });
					}
				});

				document.addEventListener('touchmove', (event) => {
					event.preventDefault();
				}, { passive: false });
			}
		}
	}

	hideKeyboard() {
		this.input.off('pointerdown');
		if (document.activeElement && document.activeElement.blur) {
			document.activeElement.blur();
		}
	}

	confettiForLevelComplete() {
		const count = 200,
			defaults = {
				origin: { y: 0.7 },
			};

		function fire(particleRatio, opts) {
			confetti(
				Object.assign({}, defaults, opts, {
					particleCount: Math.floor(count * particleRatio),
				})
			);
		}

		fire(0.25, {
			spread: 26,
			startVelocity: 55,
		});

		fire(0.2, {
			spread: 60,
		});

		fire(0.35, {
			spread: 100,
			decay: 0.91,
			scalar: 0.8,
		});

		fire(0.1, {
			spread: 120,
			startVelocity: 25,
			decay: 0.92,
			scalar: 1.2,
		});

		fire(0.1, {
			spread: 120,
			startVelocity: 45,
		});
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
