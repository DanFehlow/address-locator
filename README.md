# address-locator
Projeto com finalidade de aprimoramento em JS utilizando fetch e API.

![image](https://user-images.githubusercontent.com/86863914/198838179-9fde90f0-b62e-441a-afbf-c71b3d9b0855.png)

Durante este projeto precisei realizar algumas verificações, como por exemplo o fato de o CEP não possuir menos do que 8 dígitos.
Para esse cenário, um alert será enviada ao usuário, conforme imagem abaixo:
![image](https://user-images.githubusercontent.com/86863914/198838297-9efff69e-d453-4160-b8ef-414322abfbc4.png)


Para o cenário no qual o CEP possui 8 dígitos ou mais, porém inexistente, realizei a verificação de que se a API retornar o status erro = true, a resposta será demonstrada no próprio HTML, conforme exemplo abaixo:
![image](https://user-images.githubusercontent.com/86863914/198838417-bb05552f-2a47-402e-b61d-3b816e6a2e3d.png)
