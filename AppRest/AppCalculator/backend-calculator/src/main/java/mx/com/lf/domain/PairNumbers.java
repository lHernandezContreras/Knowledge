
package mx.com.lf.domain;

import java.io.Serializable;


public class PairNumbers implements Serializable{
    
    private float numOne;
    
    private float numTwo;

    public PairNumbers() {
    }

    public PairNumbers(float numOne, float numTwo) {
        this.numOne = numOne;
        this.numTwo = numTwo;
    }

    public float getNumOne() {
        return this.numOne;
    }

    public void setNumOne(float numOne) {
        this.numOne = numOne;
    }

    public float getNumTwo() {
        return this.numTwo;
    }

    public void setNumTwo(float numTwo) {
        this.numTwo = numTwo;
    }

    @Override
    public String toString() {
        return "pairNumbers{" + "numOne=" + numOne + ", numTwo=" + numTwo + '}';
    }
    
    
}
