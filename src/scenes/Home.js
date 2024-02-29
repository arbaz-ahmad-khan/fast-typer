
// You can write more code here

/* START OF COMPILED CODE */

class Home extends Phaser.Scene {

	constructor() {
		super("Home");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// homeBg
		this.add.image(540, 960, "homeBg");

		// text_1
		const text_1 = this.add.text(540, 900, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Test your typing skills \nagainst the clock!";
		text_1.setStyle({ "align": "center", "fontFamily": "Arial", "fontSize": "100px", "stroke": "#000000", "strokeThickness":3});

		// text_logo
		const text_logo = this.add.text(540, 437, "", {});
		text_logo.setOrigin(0.5, 0.5);
		text_logo.text = "FAST TYPER";
		text_logo.setStyle({ "fontFamily": "Arial", "fontSize": "150px", "fontStyle": "bold", "stroke": "#000000", "strokeThickness":5});

		// goBtn
		const goBtn = this.add.image(540, 1384, "goBtn");

		this.goBtn = goBtn;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	goBtn;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.input.setDefaultCursor('default');
		this.pointerOverAndOut();
		this.goBtn.setInteractive();
		this.goBtn.on("pointerdown", () => {
			this.scene.start("Level")
		});
	}

	pointerOverAndOut(){
		this.pointerOver = (aBtn,scale) => {
			this.input.setDefaultCursor('pointer');
			this.tweens.add({
				targets: aBtn,
				scaleX: scale + 0.05,
				scaleY: scale + 0.05,
				duration: 50
			})
		}
		this.pointerOut = (aBtn,scale) => {
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
		this.goBtn.on('pointerover', () => this.pointerOver([this.goBtn],1));
		this.goBtn.on('pointerout', () => this.pointerOut([this.goBtn],1));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
