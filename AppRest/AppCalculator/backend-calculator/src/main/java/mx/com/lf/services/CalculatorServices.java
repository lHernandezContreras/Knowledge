package mx.com.lf.services;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import mx.com.lf.data.ICalculator;
import mx.com.lf.domain.PairNumbers;

@Stateless
@Path("calculator")
public class CalculatorServices {
    
    @Inject
    private ICalculator iCalculator;
    
    @GET
    @Produces(value=MediaType.APPLICATION_JSON)
    @Path("/add/{num1}/{num2}")
    public float addTwoNumbers(@PathParam("num1") float num1, @PathParam("num2") float num2){
        PairNumbers pairNumbers = new PairNumbers(num1, num2);
        float resultado = iCalculator.add(pairNumbers);
        System.out.println("La suma es: " + resultado);
        return resultado;
    }
    @GET
    @Produces(value=MediaType.APPLICATION_JSON)
    @Path("/subt/{num1}/{num2}")
    public float subtTwoNumbers(@PathParam("num1") float num1, @PathParam("num2") float num2){
        PairNumbers pairNumbers = new PairNumbers(num1, num2);
        float resultado = iCalculator.sub(pairNumbers);
        System.out.println("La suma es: " + resultado);
        return resultado;
    }
    @GET
    @Produces(value=MediaType.APPLICATION_JSON)
    @Path("/mul/{num1}/{num2}")
    public float mulTwoNumbers(@PathParam("num1") float num1, @PathParam("num2") float num2){
        PairNumbers pairNumbers = new PairNumbers(num1, num2);
        float resultado = iCalculator.mul(pairNumbers);
        System.out.println("La suma es: " + resultado);
        return resultado;
    }
    @GET
    @Produces(value=MediaType.APPLICATION_JSON)
    @Path("/div/{num1}/{num2}")
    public float divTwoNumbers(@PathParam("num1") float num1, @PathParam("num2") float num2){
        PairNumbers pairNumbers = new PairNumbers(num1, num2);
        float resultado = iCalculator.div(pairNumbers);
        System.out.println("La suma es: " + resultado);
        return resultado;
    }
}
