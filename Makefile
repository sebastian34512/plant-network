# Definiere die URL der Swagger/OpenAPI-Spezifikation
SWAGGER_URL=https://plant-network.sebastiankoller.at/rest-api/schema

# Definiere das Ausgabeziel für die generierten Dateien
OUTPUT_DIR=./generated

# Der Befehl für das OpenAPI-Generator-CLI-Tool
generate-api:
	@echo "Generating TypeScript API client from OpenAPI specification..."
	sudo openapi-generator-cli generate -i $(SWAGGER_URL) -g typescript-axios -o $(OUTPUT_DIR)
	@echo "API client generated successfully in $(OUTPUT_DIR)"
