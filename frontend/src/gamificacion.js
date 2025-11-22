export function calcularNivel(xp) {
  const nivel = Math.floor(xp / 100) + 1;
  const xpNivelActual = xp % 100;
  const xpParaSubir = 100;
  const porcentaje = (xpNivelActual / xpParaSubir) * 100;

  return {
    nivel,
    xpNivelActual,
    xpParaSubir,
    porcentaje
  };
}
