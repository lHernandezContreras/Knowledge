FROM python:3.7-alpine

#creacion de un direcctiorio de trabajo en docker
WORKDIR /code

#variables de entorno flask

ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0

RUN apk add --no-cache gcc musl-dev linux-headers

#instalacion de dependencia

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt


#exposicion de un puerto

EXPOSE 5000

#copiar todo el codigo

COPY . .

#ejecutar el codigo

CMD ["flask","run"]