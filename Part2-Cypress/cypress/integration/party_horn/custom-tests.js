describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(
      $el => {
        expect($el).to.have.value(75);
      }
    )
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input')
    cy.get('#volume-number').then(
      $el => {
        expect($el).to.have.value(33);
      }
    )
  });

  it('Audio volume changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input')
    cy.get('#horn-sound').then(
      $el => {
        expect($el).to.have.prop('volume', 0.33);
      }
    )
  });

//   Test if the image and sound sources change when you select the party horn radio button

  it('Image changes when party horn selected', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').then(
      $el => {
        expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
      }
    )
  });

  it('Audio source changes when party horn selected', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#horn-sound').then(
      $el => {
        expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
      }
    )
  });

// Test if the volume image changes when increasing volumes (you must test for all 3 cases)

  it('Volume image changes to level 3', () => {
    cy.get('#volume-slider').invoke('val', 67).trigger('input')
    // cy.get('#').invoke('val', 33).trigger('input')
    cy.get('#volume-image').then(
      $el => {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
      }
    )
  })

  it('Volume image changes to level 2', () => {
    cy.get('#volume-slider').invoke('val', 34).trigger('input')
    // cy.get('#').invoke('val', 33).trigger('input')
    cy.get('#volume-image').then(
      $el => {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
      }
    )
  });

  it('Volume image changes to level 1', () => {
    cy.get('#volume-slider').invoke('val', 1).trigger('input')
    // cy.get('#').invoke('val', 33).trigger('input')
    cy.get('#volume-image').then(
      $el => {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
      }
    )
  });

  it('Volume image changes to level 0', () => {
    cy.get('#volume-slider').invoke('val', 0).trigger('input')
    // cy.get('#').invoke('val', 33).trigger('input')
    cy.get('#volume-image').then(
      $el => {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
      }
    )
  })

// Test if the honk button is disabled when the textbox input is a empty or a non-number
  it('Horn is disabled when the textbox is empty', () => {
    cy.get('#volume-number').invoke('val', '').trigger('input')
    cy.get('#honk-btn').then(
      $el => {
        expect($el).to.have.attr('disabled');
      }
    )
  })

  it('Horn is disabled when the textbox has a non-number', () => {
    cy.get('#volume-number').invoke('val', 'e').trigger('input')
    cy.get('#honk-btn').then(
      $el => {
        expect($el).to.have.attr('disabled');
      }
    )
  })

// Test if an error is shown when you type a number outside of the given range for the volume textbox input
  it('Error is shown when the textbox has number out of range', () => {
    cy.get('#volume-number').invoke('val', 9999).trigger('input')
    cy.get('#volume-number').then(
      $el => {
        expect($el[0].validationMessage).to.eq('Value must be less than or equal to 100.')
      }
    )
  })

});
