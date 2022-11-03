
package mx.com.lf.data;

import mx.com.lf.domain.PairNumbers;


public class CalculatorImpl implements ICalculator{

    @Override
    public float add(PairNumbers pairNumbers) {
        float resultado = pairNumbers.getNumOne()+pairNumbers.getNumTwo();
        return resultado;
    }

    @Override
    public float sub(PairNumbers pairNumbers) {
        float resultado = pairNumbers.getNumOne()-pairNumbers.getNumTwo();
        return resultado;
    }

    @Override
    public float mul(PairNumbers pairNumbers) {
        float resultado = pairNumbers.getNumOne()*pairNumbers.getNumTwo();
        return resultado;
    }

    @Override
    public float div(PairNumbers pairNumbers) {
        float resultado = pairNumbers.getNumOne()/pairNumbers.getNumTwo();
        return resultado;
    }
    
}
