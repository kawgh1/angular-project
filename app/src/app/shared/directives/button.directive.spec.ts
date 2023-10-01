/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ButtonDirective } from './button.directive';
import { ElementRef } from '@angular/core';

describe('Directive: Button', () => {
  it('should create an instance', () => {
    const el = new ElementRef(HTMLElement);
    const directive = new ButtonDirective(el);
    expect(directive).toBeTruthy();
  });
});
