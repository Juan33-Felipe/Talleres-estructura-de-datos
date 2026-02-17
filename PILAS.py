class NavegadorCarpetas:
    def __init__(self):
        self.carpetas = []

    def entrar_a_carpeta(self, nombre):
        self.carpetas.append(nombre)

    def retroceder(self):
        if len(self.carpetas) > 0:
            return self.carpetas.pop()

    def mostrar_ruta(self):
        print("Ruta actual:", self.carpetas)

    def obtener_ubicacion_actual(self):
        if len(self.carpetas) > 0:
            return self.carpetas[-1]
        return "Directorio raíz"

## USO
mi_pc = NavegadorCarpetas()

mi_pc.entrar_a_carpeta("C:")
mi_pc.entrar_a_carpeta("Usuarios")
mi_pc.entrar_a_carpeta("Escritorio")

mi_pc.mostrar_ruta()

print("Retrocediendo de:", mi_pc.retroceder())

mi_pc.mostrar_ruta()
print("Estás en:", mi_pc.obtener_ubicacion_actual())