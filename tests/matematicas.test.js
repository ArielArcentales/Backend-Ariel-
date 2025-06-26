import {describe,it, expect} from 'vitest';
import { sumar } from '../utlis/matematicas';

describe('Funcion matematicas', () =>{
    it('debe sumar correctamnete',()=>{
        expect(matematicas.sumar(3.2)).toBe(5);
    })
})