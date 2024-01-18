# Oceanic
Oceanic: Angular and Spring Boot Driven E-Commerce for Boating Enthusiasts


Déploiement et Test d'une application Backend
api REST
Objectifs :
L’objectif de cet atelier est de vous apprendre comment :
• Déployer et démarrer l’application backend fournissant les webservices (api ) 
REST qui seront consommés à partire de la partie frontend Angular. Le 
fichier .jar (executable java) de l’application Backend vous est fourni dans la 
description de la video Youtube.
• Tester les api REST avec POSTMAN
Prérequis :
• La machine doit contenir java 8 et Mysql (xampp ou wamp ou autre)
o Ma video comment installer Java 8 : https://youtu.be/38zFn0_9TK0
• Pour cet atelier j’ai installé XAMPP Version: 7.4.2 (MySql version 10.4.11-
MariaDB )
o Ma video comment installer xampp : https://youtu.be/bub_2KwCizo
• Installer POSTMAN, outil permettant de tester les api REST
o Ma video comment télécharger et installer POSTMAN : 
https://youtu.be/KfHlY48_Dh0
Déployer et démarrer l’application Backend (fichier .jar) 
1. Démarrer MySql de xampp (ou MySql satndalone)
2. Lancer une fenêtre invite de commande (cmd) placez-vous dans le dossier 
contenant le fichier api_rest_produits.jar, puis lancer :
Java -version
Assurez-vous que la version de java est 8 (1.8)
puis
java -jar api_rest_produits.jar
Réduisez la fenêtre cmd (ne la fermez pas pour ne pas arrêter l’application Backend)
Tester avec POSTMAN les Web Service (api) REST
Tester le Web service REST permettant de retourner tous les produits
3. Tester avec POSTMAN le web service REST, permettant de retourner tous les 
produits : http://localhost:8080/produits/api
Tester le Web service REST permettant de consulter un produit
4. Tester avec POSTMAN le web service REST, permettant de consulter un 
produit en fournissant sont id : http://localhost:8080/produits/api/2
Tester le Web service REST permettant d’ajouter un produit
5. Tester avec POSTMAN le web service REST, permettant d’ajouter un produit : 
http://localhost:8080/produits/api
• Choisissez la méthode POST 
• Dans l’onglet Body, cliquez sur raw, puis entrer un produit au format 
JSON :
{ "nomProduit": "tablette Samsung Notes",
 "prixProduit": 1980
}
 
Tester le Web service REST permettant de modifier un produit
6. Tester avec POSTMAN le web service REST permettant de modifier un 
produit : http://localhost:8080/produits/api/
Tester le Web service REST permettant de supprimer un produit
7. Tester avec POSTMAN le web service REST, permettant de supprimer un 
produit: http://localhost:8080/produits/api/5
