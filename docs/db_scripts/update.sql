-- ============================================================
-- UPDATE DE PRECIOS — LISTA_DE_PRECIOS_NF__29_ (PDF nuevo)
-- Productos actualizados: 472
-- Productos nuevos a insertar: 247
-- Productos sin match en PDF (verificar): 231
-- ============================================================

-- ============================================================
-- PARTE 1: UPDATE de precios cambiados (472 productos)
-- ============================================================

-- +20.4% (era $45500)
UPDATE productos SET precio = 54780.0, updated_at = NOW()
  WHERE UPPER(nombre) = '1.0X35X20 6MM' AND activo = TRUE;

-- +18.5% (era $270)
UPDATE productos SET precio = 320.0, updated_at = NOW()
  WHERE UPPER(nombre) = '1/2 CAÑA CRISTAL' AND activo = TRUE;

-- +26.1% (era $230)
UPDATE productos SET precio = 290.0, updated_at = NOW()
  WHERE UPPER(nombre) = '1/2 CAÑA NATURAL' AND activo = TRUE;

-- +9.0% (era $2560)
UPDATE productos SET precio = 2790.0, updated_at = NOW()
  WHERE UPPER(nombre) = '11 A 20 KGR' AND activo = TRUE;

-- +8.0% (era $2370)
UPDATE productos SET precio = 2560.0, updated_at = NOW()
  WHERE UPPER(nombre) = '2 A 10 KGR' AND activo = TRUE;

-- +10.1% (era $6720)
UPDATE productos SET precio = 7400.0, updated_at = NOW()
  WHERE UPPER(nombre) = '2 EN 1' AND activo = TRUE;

-- +9.8% (era $3070)
UPDATE productos SET precio = 3370.0, updated_at = NOW()
  WHERE UPPER(nombre) = '21 A 40 KGR' AND activo = TRUE;

-- +9.6% (era $1670)
UPDATE productos SET precio = 1830.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'ALETA Y COMED CON GANCHO N° 3' AND activo = TRUE;

-- +10.8% (era $6000)
UPDATE productos SET precio = 6650.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'ALGAS' AND activo = TRUE;

-- +26.3% (era $5660)
UPDATE productos SET precio = 7150.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'ALOE' AND activo = TRUE;

-- +14.9% (era $4830)
UPDATE productos SET precio = 5550.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'ANTI STRESS BALL' AND activo = TRUE;

-- +12.1% (era $1070)
UPDATE productos SET precio = 1200.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'ANTICLORO 125 CC' AND activo = TRUE;

-- +12.5% (era $800)
UPDATE productos SET precio = 900.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'ANTICLORO 80 CC' AND activo = TRUE;

-- +11.5% (era $6160)
UPDATE productos SET precio = 6870.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'AQUA ECTO' AND activo = TRUE;

-- +19.4% (era $360)
UPDATE productos SET precio = 430.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'ARO DE SUJECION BEBEDERO' AND activo = TRUE;

-- +10.5% (era $70800)
UPDATE productos SET precio = 78200.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'AVENA Y ALOE X 5 LT' AND activo = TRUE;

-- +12.3% (era $650)
UPDATE productos SET precio = 730.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'AZUL METILENO 15 CC' AND activo = TRUE;

-- +22.2% (era $1350)
UPDATE productos SET precio = 1650.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BARRE HOJAS ( 1/2 GIRO )' AND activo = TRUE;

-- +17.5% (era $1600)
UPDATE productos SET precio = 1880.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BARRE HOJAS C/ROSCA CH' AND activo = TRUE;

-- +17.4% (era $3800)
UPDATE productos SET precio = 4460.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BARRE HOJAS C/ROSCA GDE' AND activo = TRUE;

-- +27.0% (era $370)
UPDATE productos SET precio = 470.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BAÑERA N°1 COLOR' AND activo = TRUE;

-- +26.2% (era $420)
UPDATE productos SET precio = 530.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BAÑERA N°2 COLOR' AND activo = TRUE;

-- +27.0% (era $630)
UPDATE productos SET precio = 800.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BAÑERA N°3 COLOR' AND activo = TRUE;

-- +24.5% (era $940)
UPDATE productos SET precio = 1170.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BAÑERA N°4 COLOR' AND activo = TRUE;

-- +34.7% (era $2360)
UPDATE productos SET precio = 3180.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BEBEDERO COLIBRI NACIONAL' AND activo = TRUE;

-- +22.6% (era $3100)
UPDATE productos SET precio = 3800.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BEBEDERO DE PISO DE 1,5 LTS' AND activo = TRUE;

-- +15.4% (era $1040)
UPDATE productos SET precio = 1200.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BEBEDERO EXTERNO 180 CC' AND activo = TRUE;

-- +18.1% (era $1490)
UPDATE productos SET precio = 1760.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BEBEDERO EXTERNO 200 CC' AND activo = TRUE;

-- +36.9% (era $1570)
UPDATE productos SET precio = 2150.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BEBEDERO EXTERNO 400 CC' AND activo = TRUE;

-- +16.9% (era $590)
UPDATE productos SET precio = 690.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BEBEDERO EXTERNO 70 CC MAXI' AND activo = TRUE;

-- +16.2% (era $680)
UPDATE productos SET precio = 790.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BEBEDERO EXTERNO 90 CC MAXI' AND activo = TRUE;

-- +20.0% (era $300)
UPDATE productos SET precio = 360.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BEBEDERO MINI' AND activo = TRUE;

-- +22.2% (era $180)
UPDATE productos SET precio = 220.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BEBEDERO PARA JAULIN' AND activo = TRUE;

-- +10.3% (era $925)
UPDATE productos SET precio = 1020.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BEBEDERO PARA JAULIN N° 3' AND activo = TRUE;

-- +9.9% (era $1165)
UPDATE productos SET precio = 1280.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BEBEDERO PARA JAULIN N° 4 Y 5' AND activo = TRUE;

-- +18.8% (era $1330)
UPDATE productos SET precio = 1580.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BEBEDERO/COMEDERO INTERNO 200 CC' AND activo = TRUE;

-- +19.0% (era $1530)
UPDATE productos SET precio = 1820.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BEBEDERO/COMEDERO INTERNO 400 CC' AND activo = TRUE;

-- +3.6% (era $3860)
UPDATE productos SET precio = 4000.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BEBEDROS PARA BOTELLA' AND activo = TRUE;

-- +51.3% (era $6180)
UPDATE productos SET precio = 9350.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BEBENRAT AMPOLLAS X10' AND activo = TRUE;

-- +12.0% (era $2000)
UPDATE productos SET precio = 2240.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BIFE GRANDE' AND activo = TRUE;

-- +11.3% (era $8730)
UPDATE productos SET precio = 9720.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BIO NEEM 20 CC' AND activo = TRUE;

-- +10.4% (era $4430)
UPDATE productos SET precio = 4890.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BIOVELOXAN 60 CC' AND activo = TRUE;

-- +10.4% (era $33690)
UPDATE productos SET precio = 37200.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BIOVELOXAN X 15CC X24' AND activo = TRUE;

-- +5.1% (era $7900)
UPDATE productos SET precio = 8300.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BLISTER COLLAR PARA GATOS X 12 U' AND activo = TRUE;

-- +22.2% (era $18000)
UPDATE productos SET precio = 22000.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BOLSO TRANSPORTADOR NACIONAL ( CORDURA )' AND activo = TRUE;

-- +12.5% (era $1200)
UPDATE productos SET precio = 1350.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BONTONIC 50 ML' AND activo = TRUE;

-- +11.9% (era $3180)
UPDATE productos SET precio = 3560.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BOTELLA CERVEZA' AND activo = TRUE;

-- +14.5% (era $6350)
UPDATE productos SET precio = 7270.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BOUNCY BALL' AND activo = TRUE;

-- +10.8% (era $4150)
UPDATE productos SET precio = 4600.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BOZAL CANASTA N° 5' AND activo = TRUE;

-- +14.3% (era $4550)
UPDATE productos SET precio = 5200.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BOZAL CANASTA N° 6' AND activo = TRUE;

-- +4.0% (era $14900)
UPDATE productos SET precio = 15500.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BOZAL CANASTA X6' AND activo = TRUE;

-- +10.2% (era $18600)
UPDATE productos SET precio = 20500.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'BOZAL CUERO Y ALAMBRE GRANDE' AND activo = TRUE;

-- +4.4% (era $3180)
UPDATE productos SET precio = 3320.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CABALLO CHIFLE' AND activo = TRUE;

-- +20.9% (era $7650)
UPDATE productos SET precio = 9250.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CADENA PASEO MANGO ACOLCHADO 5 MM' AND activo = TRUE;

-- +27.7% (era $8990)
UPDATE productos SET precio = 11480.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CADENA PASEO MANGO ACOLCHADO 6 MM' AND activo = TRUE;

-- +20.7% (era $17900)
UPDATE productos SET precio = 21600.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CAMA CON MANTA 50*70' AND activo = TRUE;

-- +26.3% (era $19950)
UPDATE productos SET precio = 25200.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CAMA CON MANTA 80*70' AND activo = TRUE;

-- +6.3% (era $790)
UPDATE productos SET precio = 840.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CANELON 4/5' AND activo = TRUE;

-- +6.6% (era $1220)
UPDATE productos SET precio = 1300.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CANELON 6/7' AND activo = TRUE;

-- +7.3% (era $1650)
UPDATE productos SET precio = 1770.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CANELON 8/9' AND activo = TRUE;

-- -36.1% (era $7200)
UPDATE productos SET precio = 4600.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CARDINA A VAPOR' AND activo = TRUE;

-- -41.5% (era $8200)
UPDATE productos SET precio = 4800.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CARDINA A VAPOR CON MANGO' AND activo = TRUE;

-- -13.9% (era $4760)
UPDATE productos SET precio = 4100.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CARDINA CON BOTON AUTOMATICA' AND activo = TRUE;

-- +7.8% (era $3060)
UPDATE productos SET precio = 3300.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CARDINA MADERA EXTRA GRANDE' AND activo = TRUE;

-- +3.4% (era $1450)
UPDATE productos SET precio = 1500.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CARDINA PLASTICA CHICA' AND activo = TRUE;

-- +15.4% (era $1950)
UPDATE productos SET precio = 2250.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CARDINA PLASTICA GRANDE' AND activo = TRUE;

-- +3.7% (era $1640)
UPDATE productos SET precio = 1700.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CARDINA PLASTICA MEDIANA' AND activo = TRUE;

-- +9.1% (era $1970)
UPDATE productos SET precio = 2150.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CARDINA PLASTICA REFORZADA NEGRA CHICA' AND activo = TRUE;

-- +9.7% (era $3600)
UPDATE productos SET precio = 3950.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CARDINA PLASTICA REFORZADA NEGRA GRANDE' AND activo = TRUE;

-- +3.4% (era $2900)
UPDATE productos SET precio = 3000.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CARDINA PLASTICA REFORZADA NEGRA MEDIANA' AND activo = TRUE;

-- +20.6% (era $3150)
UPDATE productos SET precio = 3800.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CASITA PARA HAMSTER (ELPE)' AND activo = TRUE;

-- +25.0% (era $440)
UPDATE productos SET precio = 550.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CAZOLETA CON MANIJA' AND activo = TRUE;

-- +18.9% (era $3590)
UPDATE productos SET precio = 4270.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CAZUELA ACERO HUELLA 14 CM' AND activo = TRUE;

-- +18.0% (era $4560)
UPDATE productos SET precio = 5380.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CAZUELA ACERO HUELLA 17 CM' AND activo = TRUE;

-- +20.5% (era $5600)
UPDATE productos SET precio = 6750.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CAZUELA ACERO HUELLA 19 CM' AND activo = TRUE;

-- +11.2% (era $6950)
UPDATE productos SET precio = 7730.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CAZUELA ACERO HUELLA 21 CM' AND activo = TRUE;

-- +20.6% (era $8850)
UPDATE productos SET precio = 10670.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CAZUELA ACERO HUELLA 26 CM' AND activo = TRUE;

-- +39.3% (era $6100)
UPDATE productos SET precio = 8500.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CAZUELA DOBLE ACERO 13 CM' AND activo = TRUE;

-- +54.7% (era $8600)
UPDATE productos SET precio = 13300.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CAZUELA DOBLE ACERO 17 CM' AND activo = TRUE;

-- +7.7% (era $1300)
UPDATE productos SET precio = 1400.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CEPILLO DE SILICONA P/ SHAMPOO' AND activo = TRUE;

-- +1.5% (era $2020)
UPDATE productos SET precio = 2050.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CEPILLO DOBLE CHICO' AND activo = TRUE;

-- +3.8% (era $2600)
UPDATE productos SET precio = 2700.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CEPILLO DOBLE GRANDE' AND activo = TRUE;

-- +4.4% (era $2250)
UPDATE productos SET precio = 2350.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CEPILLO DOBLE MEDIANO' AND activo = TRUE;

-- +8.3% (era $3000)
UPDATE productos SET precio = 3250.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CEPILLO DOBLE ROJO/NEGRO' AND activo = TRUE;

-- +10.3% (era $8160)
UPDATE productos SET precio = 9000.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CESPED GREENLAND 9 VARIEDADES 1 KGS' AND activo = TRUE;

-- +8.5% (era $4470)
UPDATE productos SET precio = 4850.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CESPED GREENLAND 9 VARIEDADES 500 GRS' AND activo = TRUE;

-- +10.1% (era $5450)
UPDATE productos SET precio = 6000.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CF10 AMBIENTAL 100 CC' AND activo = TRUE;

-- +12.0% (era $2000)
UPDATE productos SET precio = 2240.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CHOCLO' AND activo = TRUE;

-- +12.2% (era $2960)
UPDATE productos SET precio = 3320.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CIEN PIES' AND activo = TRUE;

-- +7.0% (era $10800)
UPDATE productos SET precio = 11560.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CITROXAN 1 LT' AND activo = TRUE;

-- +7.1% (era $7150)
UPDATE productos SET precio = 7660.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CITROXAN 500 CC' AND activo = TRUE;

-- +30.2% (era $5800)
UPDATE productos SET precio = 7550.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COLCHONETA COMUN TELA N°1 70X50 CM' AND activo = TRUE;

-- +21.2% (era $9900)
UPDATE productos SET precio = 12000.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COLCHONETA COMUN TELA N°2 80X60 CM' AND activo = TRUE;

-- +19.9% (era $13600)
UPDATE productos SET precio = 16300.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COLCHONETA COMUN TELA N°3 100X70 CM' AND activo = TRUE;

-- +21.6% (era $17600)
UPDATE productos SET precio = 21400.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COLCHONETA COMUN TELA N°4 120X80 CM' AND activo = TRUE;

-- +12.5% (era $11200)
UPDATE productos SET precio = 12600.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COLCHONETA CORDURA ESTAMPADA C/ FUNDA N°1' AND activo = TRUE;

-- +23.6% (era $15700)
UPDATE productos SET precio = 19400.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COLCHONETA CORDURA ESTAMPADA C/ FUNDA N°2' AND activo = TRUE;

-- +21.8% (era $19700)
UPDATE productos SET precio = 24000.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COLCHONETA CORDURA ESTAMPADA C/ FUNDA N°3' AND activo = TRUE;

-- +16.4% (era $27200)
UPDATE productos SET precio = 31650.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COLCHONETA CORDURA ESTAMPADA C/ FUNDA N°4' AND activo = TRUE;

-- +17.9% (era $14250)
UPDATE productos SET precio = 16800.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COLCHONETA CUADRADA POLAR 60 X 60' AND activo = TRUE;

-- +23.5% (era $4900)
UPDATE productos SET precio = 6050.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COLCHONETA FINA GUATA-POLAR 45*55 N1' AND activo = TRUE;

-- +15.7% (era $6700)
UPDATE productos SET precio = 7750.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COLCHONETA FINA GUATA-POLAR 50*65 N2' AND activo = TRUE;

-- +15.9% (era $9100)
UPDATE productos SET precio = 10550.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COLCHONETA FINA GUATA-POLAR 60*80 N3' AND activo = TRUE;

-- +19.6% (era $10700)
UPDATE productos SET precio = 12800.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COLCHONETA FINA GUATA-POLAR 70*90 N4' AND activo = TRUE;

-- +11.0% (era $10500)
UPDATE productos SET precio = 11650.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COLCHONETA REF ESTAMPADA C/ FUNDA N°1' AND activo = TRUE;

-- +20.4% (era $14700)
UPDATE productos SET precio = 17700.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COLCHONETA REF ESTAMPADA C/ FUNDA N°2' AND activo = TRUE;

-- +23.5% (era $18700)
UPDATE productos SET precio = 23100.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COLCHONETA REF ESTAMPADA C/ FUNDA N°3' AND activo = TRUE;

-- +11.5% (era $25700)
UPDATE productos SET precio = 28650.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COLCHONETA REF ESTAMPADA C/ FUNDA N°4' AND activo = TRUE;

-- +33.3% (era $900)
UPDATE productos SET precio = 1200.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COLLAR AHORQUE 2,5 MM' AND activo = TRUE;

-- +14.3% (era $1400)
UPDATE productos SET precio = 1600.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COLLAR AHORQUE 3 MM' AND activo = TRUE;

-- +50.0% (era $1700)
UPDATE productos SET precio = 2550.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COLLAR AHORQUE 4 MM' AND activo = TRUE;

-- +10.3% (era $1950)
UPDATE productos SET precio = 2150.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COLLAR DOBLE 30MM X 55 CM' AND activo = TRUE;

-- +5.6% (era $2150)
UPDATE productos SET precio = 2270.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COLLAR DOBLE 30MM X 65 CM' AND activo = TRUE;

-- +6.5% (era $2300)
UPDATE productos SET precio = 2450.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COLLAR DOBLE 30MM X 75 CM' AND activo = TRUE;

-- +5.8% (era $3450)
UPDATE productos SET precio = 3650.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COLLAR DOBLE 40MM X 70 CM CON HERRAJE ESP' AND activo = TRUE;

-- +10.2% (era $2495)
UPDATE productos SET precio = 2750.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COMEDERO 2 OJALES' AND activo = TRUE;

-- +20.3% (era $1580)
UPDATE productos SET precio = 1900.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COMEDERO 3 AUJEROS' AND activo = TRUE;

-- +10.3% (era $3400)
UPDATE productos SET precio = 3750.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COMEDERO 4 OJALES' AND activo = TRUE;

-- +10.5% (era $4570)
UPDATE productos SET precio = 5050.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COMEDERO 6 OJALES' AND activo = TRUE;

-- +13.2% (era $7480)
UPDATE productos SET precio = 8470.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COMEDERO AUTOMATICO PARA PAJAROS' AND activo = TRUE;

-- +22.6% (era $3100)
UPDATE productos SET precio = 3800.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COMEDERO DE PISO DE 1,5 LTS' AND activo = TRUE;

-- +11.7% (era $5570)
UPDATE productos SET precio = 6220.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COMEDERO INTERNO VOLADORA P/COLGAR' AND activo = TRUE;

-- +12.2% (era $6470)
UPDATE productos SET precio = 7260.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COMEDERO LAT EXTERNO DE VOLADORA' AND activo = TRUE;

-- +11.1% (era $360)
UPDATE productos SET precio = 400.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COMEDERO PARA JAULIN 120 MM' AND activo = TRUE;

-- +10.0% (era $2500)
UPDATE productos SET precio = 2750.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COMEDERO PARA POLLO 10 CM' AND activo = TRUE;

-- +10.1% (era $4260)
UPDATE productos SET precio = 4690.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COMEDERO PARA POLLO 20 CM' AND activo = TRUE;

-- +10.1% (era $7395)
UPDATE productos SET precio = 8140.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COMEDERO PARA POLLO 30 CM' AND activo = TRUE;

-- +10.1% (era $8290)
UPDATE productos SET precio = 9130.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COMEDERO PARA POLLO 40 CM' AND activo = TRUE;

-- +22.2% (era $270)
UPDATE productos SET precio = 330.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COMEDOR ALETA N°1' AND activo = TRUE;

-- +22.2% (era $360)
UPDATE productos SET precio = 440.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COMEDOR ALETA N°2' AND activo = TRUE;

-- +25.6% (era $430)
UPDATE productos SET precio = 540.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COMEDOR ALETA N°3' AND activo = TRUE;

-- +22.2% (era $270)
UPDATE productos SET precio = 330.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COMEDOR INTERNO CON GANCHO N°1' AND activo = TRUE;

-- +22.2% (era $360)
UPDATE productos SET precio = 440.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COMEDOR INTERNO CON GANCHO N°2' AND activo = TRUE;

-- +25.6% (era $430)
UPDATE productos SET precio = 540.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COMEDOR INTERNO CON GANCHO N°3' AND activo = TRUE;

-- +17.8% (era $450)
UPDATE productos SET precio = 530.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COMEDOR TAPADO SOPLADO' AND activo = TRUE;

-- +8.3% (era $4800)
UPDATE productos SET precio = 5200.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'COMEDROS POLLOS 3 LITROS' AND activo = TRUE;

-- +18.7% (era $5200)
UPDATE productos SET precio = 6170.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CONECTOR CRUZ DE 4 VIAS P/AIREACION EN BL X 50' AND activo = TRUE;

-- +18.7% (era $5200)
UPDATE productos SET precio = 6170.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CONECTOR RECTOS DE 1 VIA P/AIREACION EN BL X 50' AND activo = TRUE;

-- +18.7% (era $5200)
UPDATE productos SET precio = 6170.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CONECTOR T DE 3 VIAS P/AIREACION EN BL X 50' AND activo = TRUE;

-- +15.1% (era $730)
UPDATE productos SET precio = 840.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CONO CRISTAL P/PLACA CRISTAL Y NATURAL' AND activo = TRUE;

-- +12.2% (era $1560)
UPDATE productos SET precio = 1750.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CONTRAPUNTO 125 CC' AND activo = TRUE;

-- +10.0% (era $35000)
UPDATE productos SET precio = 38500.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CREMA ENJUAGUE 5 LTS' AND activo = TRUE;

-- +12.0% (era $2000)
UPDATE productos SET precio = 2240.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'CUADRADO CON PINCHES' AND activo = TRUE;

-- +8.0% (era $4350)
UPDATE productos SET precio = 4700.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'D ´SIST 30 CC' AND activo = TRUE;

-- +8.2% (era $5870)
UPDATE productos SET precio = 6350.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'D ´SIST 60 CC' AND activo = TRUE;

-- +7.6% (era $1450)
UPDATE productos SET precio = 1560.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'DEDAL LIMPIA DIENTES DE SILICONA' AND activo = TRUE;

-- +12.0% (era $1830)
UPDATE productos SET precio = 2050.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'DONA' AND activo = TRUE;

-- +12.7% (era $6300)
UPDATE productos SET precio = 7100.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'ECTHOL LIQUIDO 120 CC' AND activo = TRUE;

-- +5.2% (era $4850)
UPDATE productos SET precio = 5100.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'ECTHOL LIQUIDO 70 CC' AND activo = TRUE;

-- +9.9% (era $3550)
UPDATE productos SET precio = 3900.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'ECTOSIN 100 GRS' AND activo = TRUE;

-- +10.7% (era $3750)
UPDATE productos SET precio = 4150.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'EDUCADOR BLP 500 CC' AND activo = TRUE;

-- +10.6% (era $7730)
UPDATE productos SET precio = 8550.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'ENJUAGUE LACIO' AND activo = TRUE;

-- +9.4% (era $78050)
UPDATE productos SET precio = 85400.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'ENJUAGUE LACIO AMARILLO-VOLUMEN' AND activo = TRUE;

-- +10.6% (era $7730)
UPDATE productos SET precio = 8550.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'ENJUAGUE VOLUMEN' AND activo = TRUE;

-- +25.9% (era $270)
UPDATE productos SET precio = 340.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'ESQUINERO PARA JAULIN' AND activo = TRUE;

-- +8.4% (era $12180)
UPDATE productos SET precio = 13200.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'FERTTIFOX FLORACION 1 LT' AND activo = TRUE;

-- +9.0% (era $3900)
UPDATE productos SET precio = 4250.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'FERTTIFOX FLORACION 200 CC' AND activo = TRUE;

-- +9.0% (era $3900)
UPDATE productos SET precio = 4250.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'FERTTIFOX FOLLAJE 200 CC' AND activo = TRUE;

-- +8.4% (era $12180)
UPDATE productos SET precio = 13200.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'FERTTIFOX POTENCIADO 1 LT' AND activo = TRUE;

-- +9.0% (era $3900)
UPDATE productos SET precio = 4250.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'FERTTIFOX POTENCIADO 200 CC' AND activo = TRUE;

-- +18.8% (era $11700)
UPDATE productos SET precio = 13900.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'FILTRO ESPONJA EDA 100 P/ BANDEJA 100 LTS/HORA' AND activo = TRUE;

-- +10.5% (era $4960)
UPDATE productos SET precio = 5480.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'FILTRO ESPONJA EDA 30 3N BL 30 LTS/HORA' AND activo = TRUE;

-- +12.1% (era $3550)
UPDATE productos SET precio = 3980.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'FOCA CHIFLE' AND activo = TRUE;

-- +10.5% (era $7680)
UPDATE productos SET precio = 8490.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'FRAGANCIAS POR UNIDAD' AND activo = TRUE;

-- +10.3% (era $8250)
UPDATE productos SET precio = 9100.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'FUMIXAN FOG X 440 CC' AND activo = TRUE;

-- +13.4% (era $6730)
UPDATE productos SET precio = 7630.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'FUMIXAN HOGAR' AND activo = TRUE;

-- +13.3% (era $8300)
UPDATE productos SET precio = 9400.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'FUMIXAN PRO' AND activo = TRUE;

-- +25.6% (era $8400)
UPDATE productos SET precio = 10550.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'FUNDA CORDURA N°2' AND activo = TRUE;

-- +22.7% (era $9900)
UPDATE productos SET precio = 12150.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'FUNDA CORDURA N°3' AND activo = TRUE;

-- +17.9% (era $15050)
UPDATE productos SET precio = 17750.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'FUNDA CORDURA N°4' AND activo = TRUE;

-- +20.9% (era $7400)
UPDATE productos SET precio = 8950.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'FUNDA REFORZADA N°2' AND activo = TRUE;

-- +25.1% (era $8950)
UPDATE productos SET precio = 11200.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'FUNDA REFORZADA N°3' AND activo = TRUE;

-- +8.2% (era $13450)
UPDATE productos SET precio = 14550.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'FUNDA REFORZADA N°4' AND activo = TRUE;

-- +4.8% (era $4550)
UPDATE productos SET precio = 4770.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'FUNGOXAN LIQ 30 CC' AND activo = TRUE;

-- +12.2% (era $2220)
UPDATE productos SET precio = 2490.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GALLETITA OREO' AND activo = TRUE;

-- +11.8% (era $2200)
UPDATE productos SET precio = 2460.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GALLETITA RECTANGULAR' AND activo = TRUE;

-- +12.2% (era $2220)
UPDATE productos SET precio = 2490.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GALLETITA REDONDA' AND activo = TRUE;

-- +25.7% (era $350)
UPDATE productos SET precio = 440.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GANCHO TRENZADO GRANDE' AND activo = TRUE;

-- +14.9% (era $2220)
UPDATE productos SET precio = 2550.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GATITO CHIFLE' AND activo = TRUE;

-- +10.0% (era $2400)
UPDATE productos SET precio = 2640.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GATO DE 4 A 8 KGS' AND activo = TRUE;

-- +9.8% (era $2240)
UPDATE productos SET precio = 2460.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GATO HASTA 4 KGS' AND activo = TRUE;

-- +14.4% (era $1950)
UPDATE productos SET precio = 2230.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GEAR BONE X4' AND activo = TRUE;

-- +14.7% (era $2580)
UPDATE productos SET precio = 2960.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GEAR BONE X8' AND activo = TRUE;

-- +9.2% (era $2070)
UPDATE productos SET precio = 2260.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GELTEK CEBOS X 6 UNID' AND activo = TRUE;

-- +8.8% (era $4000)
UPDATE productos SET precio = 4350.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GELTEK JERICIDAS 12 GR' AND activo = TRUE;

-- +8.2% (era $2680)
UPDATE productos SET precio = 2900.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GELTEK JERICIDAS 6 GR' AND activo = TRUE;

-- +8.8% (era $4340)
UPDATE productos SET precio = 4720.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GELTEK JERICIDAS HORMIGAS 12 GRS' AND activo = TRUE;

-- +8.0% (era $2750)
UPDATE productos SET precio = 2970.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GELTEK JERICIDAS HORMIGAS 6 GRS' AND activo = TRUE;

-- +9.1% (era $19250)
UPDATE productos SET precio = 21000.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GIBER 1,5 LTS' AND activo = TRUE;

-- +9.0% (era $52750)
UPDATE productos SET precio = 57500.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GIBER 5 LTS' AND activo = TRUE;

-- +8.9% (era $55450)
UPDATE productos SET precio = 60400.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GIBER 7 LTS' AND activo = TRUE;

-- +9.0% (era $60250)
UPDATE productos SET precio = 65700.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GIBER 9 LTS' AND activo = TRUE;

-- +19.3% (era $4360)
UPDATE productos SET precio = 5200.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GLACOXAN CIPER 30 CC' AND activo = TRUE;

-- +5.1% (era $3350)
UPDATE productos SET precio = 3520.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GLACOXAN E 120 CC' AND activo = TRUE;

-- +4.7% (era $2340)
UPDATE productos SET precio = 2450.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GLACOXAN E 60 CC' AND activo = TRUE;

-- +3.3% (era $3000)
UPDATE productos SET precio = 3100.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GLACOXAN H 250 GR (TALQUERA )' AND activo = TRUE;

-- +31.1% (era $2800)
UPDATE productos SET precio = 3670.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GLACOXAN SAVIA 60 CC' AND activo = TRUE;

-- +10.0% (era $6980)
UPDATE productos SET precio = 7680.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GLIFOTEX 250 CC' AND activo = TRUE;

-- +12.8% (era $3900)
UPDATE productos SET precio = 4400.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GRANADA MEDIANA' AND activo = TRUE;

-- +36.7% (era $1500)
UPDATE productos SET precio = 2050.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GRANZA BLANCO 500 GRS' AND activo = TRUE;

-- +14.5% (era $5500)
UPDATE productos SET precio = 6300.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GUANTE MANOPLA ACERO PROTEGIDO' AND activo = TRUE;

-- +10.4% (era $2400)
UPDATE productos SET precio = 2650.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GUANTE MANOPLA AMARILLO -AZUL' AND activo = TRUE;

-- +8.1% (era $2730)
UPDATE productos SET precio = 2950.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'GUANTE MANOPLA CAJA AZUL' AND activo = TRUE;

-- +14.9% (era $2220)
UPDATE productos SET precio = 2550.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HAMBURGUESA CHIFLE' AND activo = TRUE;

-- +20.5% (era $18500)
UPDATE productos SET precio = 22300.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HAMSTERA DOBLE' AND activo = TRUE;

-- +12.2% (era $2220)
UPDATE productos SET precio = 2490.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HELADO' AND activo = TRUE;

-- +5.7% (era $6000)
UPDATE productos SET precio = 6340.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HERBICIDA SELECTIVO 100 CC' AND activo = TRUE;

-- +5.1% (era $9250)
UPDATE productos SET precio = 9720.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HERBICIDA SELECTIVO 200 CC' AND activo = TRUE;

-- +8.0% (era $17170)
UPDATE productos SET precio = 18550.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HOR-TAL 1000 CC' AND activo = TRUE;

-- +8.0% (era $3380)
UPDATE productos SET precio = 3650.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HOR-TAL 120 CC' AND activo = TRUE;

-- +7.9% (era $5560)
UPDATE productos SET precio = 6000.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HOR-TAL 250 CC' AND activo = TRUE;

-- +8.3% (era $3030)
UPDATE productos SET precio = 3280.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HOR-TAL 250 GR (TALQUERA)' AND activo = TRUE;

-- +8.0% (era $9760)
UPDATE productos SET precio = 10540.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HOR-TAL 500 CC' AND activo = TRUE;

-- +8.1% (era $2360)
UPDATE productos SET precio = 2550.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HOR-TAL 60 CC' AND activo = TRUE;

-- +8.3% (era $1200)
UPDATE productos SET precio = 1300.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HOR-TAL MIX 100 GR' AND activo = TRUE;

-- +7.8% (era $2550)
UPDATE productos SET precio = 2750.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HOR-TAL MIX 250 GR' AND activo = TRUE;

-- +8.0% (era $3860)
UPDATE productos SET precio = 4170.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HOR-TAL MIX 500 GR' AND activo = TRUE;

-- +14.5% (era $1170)
UPDATE productos SET precio = 1340.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HUESO ANTI SARRO' AND activo = TRUE;

-- +14.9% (era $4700)
UPDATE productos SET precio = 5400.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HUESO ANTISARRO JUMBO' AND activo = TRUE;

-- +11.9% (era $2520)
UPDATE productos SET precio = 2820.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HUESO CHIFLE GDE' AND activo = TRUE;

-- +12.0% (era $1250)
UPDATE productos SET precio = 1400.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HUESO GOMA MEDIANO' AND activo = TRUE;

-- +13.0% (era $2150)
UPDATE productos SET precio = 2430.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HUESO RASCA ENCIAS' AND activo = TRUE;

-- +11.9% (era $2520)
UPDATE productos SET precio = 2820.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HUESO RELIEVE CHIFLE' AND activo = TRUE;

-- +7.3% (era $4500)
UPDATE productos SET precio = 4830.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HUESOS 10/11' AND activo = TRUE;

-- +7.4% (era $5700)
UPDATE productos SET precio = 6120.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HUESOS 11/12' AND activo = TRUE;

-- +7.8% (era $770)
UPDATE productos SET precio = 830.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HUESOS 3/4' AND activo = TRUE;

-- +7.1% (era $990)
UPDATE productos SET precio = 1060.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HUESOS 4/5' AND activo = TRUE;

-- +7.0% (era $1280)
UPDATE productos SET precio = 1370.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HUESOS 5/6' AND activo = TRUE;

-- +7.2% (era $1800)
UPDATE productos SET precio = 1930.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HUESOS 6/7' AND activo = TRUE;

-- +7.9% (era $2400)
UPDATE productos SET precio = 2590.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HUESOS 7/8' AND activo = TRUE;

-- +7.2% (era $3040)
UPDATE productos SET precio = 3260.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HUESOS 8/9' AND activo = TRUE;

-- +7.0% (era $3550)
UPDATE productos SET precio = 3800.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HUESOS 9/10' AND activo = TRUE;

-- +17.9% (era $1400)
UPDATE productos SET precio = 1650.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'HUEVITO' AND activo = TRUE;

-- +10.5% (era $43350)
UPDATE productos SET precio = 47900.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'JABON GLICERINA' AND activo = TRUE;

-- +12.2% (era $6150)
UPDATE productos SET precio = 6900.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'JABON POTASICO 200 CC' AND activo = TRUE;

-- +20.1% (era $28100)
UPDATE productos SET precio = 33750.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'JUEGO EXAGONAL X 4' AND activo = TRUE;

-- +20.2% (era $79900)
UPDATE productos SET precio = 96000.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'JUEGO RECT SUPER 7 PECERAS' AND activo = TRUE;

-- +20.6% (era $24700)
UPDATE productos SET precio = 29800.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'JUEGO RECTANGULAR X 4' AND activo = TRUE;

-- +10.0% (era $13585)
UPDATE productos SET precio = 14950.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'JUEGO RECTANGULAR X 5 UNIDADES' AND activo = TRUE;

-- +11.4% (era $1750)
UPDATE productos SET precio = 1950.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'JUGUETES CHIFLE NACIONALES CHICOS (10+1)' AND activo = TRUE;

-- +11.6% (era $2150)
UPDATE productos SET precio = 2400.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'JUGUETES CHIFLE NACIONALES MEDIANOS (10+1)' AND activo = TRUE;

-- +8.4% (era $1910)
UPDATE productos SET precio = 2070.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'JUMPER SMALL C/PINCHES' AND activo = TRUE;

-- +7.4% (era $2700)
UPDATE productos SET precio = 2900.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'KIT MAMADERA' AND activo = TRUE;

-- +15.5% (era $3030)
UPDATE productos SET precio = 3500.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'KIT PARA JAULAS' AND activo = TRUE;

-- +8.7% (era $2300)
UPDATE productos SET precio = 2500.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'LECHUZA GOMA C/BOA Y CASCABEL' AND activo = TRUE;

-- +22.6% (era $8890)
UPDATE productos SET precio = 10900.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'LIMPIAGRAVA A BOMBA MANUAL 30 CM' AND activo = TRUE;

-- +21.5% (era $9880)
UPDATE productos SET precio = 12000.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'LIMPIAGRAVA A BOMBA MANUAL 40 CM' AND activo = TRUE;

-- +19.1% (era $11000)
UPDATE productos SET precio = 13100.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'LIMPIAGRAVA A BOMBA MANUAL 50 CM' AND activo = TRUE;

-- +22.3% (era $11980)
UPDATE productos SET precio = 14650.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'LIMPIAGRAVA A BOMBA MANUAL 60 CM' AND activo = TRUE;

-- +31.5% (era $21300)
UPDATE productos SET precio = 28000.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'LITERA CERRADA N°2 57*54*37' AND activo = TRUE;

-- +20.9% (era $11500)
UPDATE productos SET precio = 13900.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'LLAVE DE CORTE PARA AIREACION EN BOLSA X 50' AND activo = TRUE;

-- +24.1% (era $1450)
UPDATE productos SET precio = 1800.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MAMADERA CHICA' AND activo = TRUE;

-- +10.1% (era $4450)
UPDATE productos SET precio = 4900.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MANCHESTER 350 CC' AND activo = TRUE;

-- +10.1% (era $9900)
UPDATE productos SET precio = 10900.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MANCHESTER 700 CC' AND activo = TRUE;

-- +3.1% (era $3250)
UPDATE productos SET precio = 3350.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MANTA PARA LAMER PENTAGONO 18*18' AND activo = TRUE;

-- +16.1% (era $5600)
UPDATE productos SET precio = 6500.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MANTA POLAR 70*100' AND activo = TRUE;

-- +9.7% (era $3400)
UPDATE productos SET precio = 3730.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MAS DE 40 KGR' AND activo = TRUE;

-- +15.5% (era $1100)
UPDATE productos SET precio = 1270.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MATRI MACETA BERTA N15' AND activo = TRUE;

-- +4.2% (era $1420)
UPDATE productos SET precio = 1480.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MATRI MACETA BERTA N18' AND activo = TRUE;

-- +5.9% (era $2880)
UPDATE productos SET precio = 3050.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MATRI MACETA FINNY N°24' AND activo = TRUE;

-- +5.9% (era $2220)
UPDATE productos SET precio = 2350.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MATRI MACETA JARDINERA 35 CM' AND activo = TRUE;

-- +5.2% (era $3280)
UPDATE productos SET precio = 3450.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MATRI MACETA JARDINERA 45 CM' AND activo = TRUE;

-- +4.6% (era $5020)
UPDATE productos SET precio = 5250.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MATRI MACETA JARDINERA 55 CM' AND activo = TRUE;

-- +4.9% (era $6670)
UPDATE productos SET precio = 7000.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MATRI MACETA JARDINERA 60 CM' AND activo = TRUE;

-- +4.8% (era $2100)
UPDATE productos SET precio = 2200.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MATRI MACETA JARDINERA ERIKA 35 CM' AND activo = TRUE;

-- +4.6% (era $3250)
UPDATE productos SET precio = 3400.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MATRI MACETA JARDINERA ERIKA 45 CM' AND activo = TRUE;

-- +5.1% (era $3950)
UPDATE productos SET precio = 4150.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MATRI MACETA OWEN N° 20' AND activo = TRUE;

-- +5.2% (era $5400)
UPDATE productos SET precio = 5680.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MATRI MACETA OWEN N° 25' AND activo = TRUE;

-- +9.8% (era $11950)
UPDATE productos SET precio = 13120.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MATRI MACETA OWEN N° 35' AND activo = TRUE;

-- +5.0% (era $12150)
UPDATE productos SET precio = 12760.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MATRI MECETA MAURO 35 CM' AND activo = TRUE;

-- +7.3% (era $550)
UPDATE productos SET precio = 590.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MINI ROLL 7/8' AND activo = TRUE;

-- +9.0% (era $105400)
UPDATE productos SET precio = 114900.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MOCHILA GIBER 12 LTS' AND activo = TRUE;

-- +8.9% (era $112200)
UPDATE productos SET precio = 122200.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MOCHILA GIBER 16 LTS' AND activo = TRUE;

-- +9.1% (era $114850)
UPDATE productos SET precio = 125300.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MOCHILA GIBER 20 LTS' AND activo = TRUE;

-- +36.4% (era $8800)
UPDATE productos SET precio = 12000.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MOISES NIDO MICROFIBRA' AND activo = TRUE;

-- +15.0% (era $22600)
UPDATE productos SET precio = 26000.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MOISES OVALADO X 3' AND activo = TRUE;

-- +10.1% (era $22800)
UPDATE productos SET precio = 25100.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MOISES REDONDO MICROFIBRA X 3' AND activo = TRUE;

-- +8.0% (era $13150)
UPDATE productos SET precio = 14200.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MOISES REDONDO POLAR' AND activo = TRUE;

-- +15.2% (era $1650)
UPDATE productos SET precio = 1900.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MORDILLO CON 3 PUNTAS SPINNE' AND activo = TRUE;

-- +14.7% (era $2320)
UPDATE productos SET precio = 2660.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MORDILLO DOUBLE BITE' AND activo = TRUE;

-- +14.1% (era $1850)
UPDATE productos SET precio = 2110.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MORDILLO GOMA C/3 ANILLOS' AND activo = TRUE;

-- +13.2% (era $2350)
UPDATE productos SET precio = 2660.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MORDILLO PESA GOMA DURA' AND activo = TRUE;

-- +15.0% (era $2000)
UPDATE productos SET precio = 2300.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MORDILLO PORTA SNACK' AND activo = TRUE;

-- +9.8% (era $2150)
UPDATE productos SET precio = 2360.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MORDILLO RAMA GOMA DURA' AND activo = TRUE;

-- +16.7% (era $1500)
UPDATE productos SET precio = 1750.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MORDILLO REDONDO GOMA' AND activo = TRUE;

-- +14.3% (era $1400)
UPDATE productos SET precio = 1600.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MORDILLO REDONDO RIGIDO' AND activo = TRUE;

-- +15.3% (era $1700)
UPDATE productos SET precio = 1960.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MORDILLO VARITA GOMA DURA' AND activo = TRUE;

-- +12.0% (era $2000)
UPDATE productos SET precio = 2240.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MUFFIN CHICO' AND activo = TRUE;

-- +11.9% (era $3180)
UPDATE productos SET precio = 3560.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MUFFIN GRANDE' AND activo = TRUE;

-- +5.6% (era $1420)
UPDATE productos SET precio = 1500.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MYRMEC 100 GRS' AND activo = TRUE;

-- +5.8% (era $2250)
UPDATE productos SET precio = 2380.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MYRMEC 200 GRS' AND activo = TRUE;

-- +6.0% (era $23780)
UPDATE productos SET precio = 25200.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MYRMEC 4 KGS' AND activo = TRUE;

-- +6.2% (era $4190)
UPDATE productos SET precio = 4450.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MYRMEC 500 GRS' AND activo = TRUE;

-- +5.8% (era $5200)
UPDATE productos SET precio = 5500.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'MYRMEC 750 GRS' AND activo = TRUE;

-- +16.4% (era $1400)
UPDATE productos SET precio = 1630.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'N° 1' AND activo = TRUE;

-- +17.1% (era $2050)
UPDATE productos SET precio = 2400.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'N° 2' AND activo = TRUE;

-- +13.2% (era $2960)
UPDATE productos SET precio = 3350.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'N° 3' AND activo = TRUE;

-- +12.7% (era $3950)
UPDATE productos SET precio = 4450.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'N° 4' AND activo = TRUE;

-- +12.9% (era $700)
UPDATE productos SET precio = 790.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'N°0' AND activo = TRUE;

-- +11.0% (era $730)
UPDATE productos SET precio = 810.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'N°1' AND activo = TRUE;

-- +9.2% (era $870)
UPDATE productos SET precio = 950.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'N°2' AND activo = TRUE;

-- +8.9% (era $900)
UPDATE productos SET precio = 980.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'N°3' AND activo = TRUE;

-- +8.6% (era $930)
UPDATE productos SET precio = 1010.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'N°4' AND activo = TRUE;

-- +8.3% (era $1200)
UPDATE productos SET precio = 1300.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'N°5' AND activo = TRUE;

-- +8.0% (era $1250)
UPDATE productos SET precio = 1350.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'N°6' AND activo = TRUE;

-- +7.7% (era $1300)
UPDATE productos SET precio = 1400.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'N°7' AND activo = TRUE;

-- +4.5% (era $3750)
UPDATE productos SET precio = 3920.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'OIL 200 CC ACEITE MINERAL' AND activo = TRUE;

-- +5.7% (era $700)
UPDATE productos SET precio = 740.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'OREJAS BLANCAS' AND activo = TRUE;

-- +5.8% (era $2740)
UPDATE productos SET precio = 2900.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PALA TODO METAL ANCHA' AND activo = TRUE;

-- +19.3% (era $285)
UPDATE productos SET precio = 340.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PALITO PLASTICO PARA JAULA 28 CM' AND activo = TRUE;

-- +14.7% (era $7800)
UPDATE productos SET precio = 8950.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PALITOS 200 UNIDADES' AND activo = TRUE;

-- +12.4% (era $40180)
UPDATE productos SET precio = 45150.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PANIC BLOQUE 1 KGR' AND activo = TRUE;

-- +12.3% (era $163250)
UPDATE productos SET precio = 183400.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PANIC BLOQUE 5 KGR' AND activo = TRUE;

-- +11.0% (era $7300)
UPDATE productos SET precio = 8100.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PARIDERA/ BETTERA /MINI ACUARIO FLOTANTE' AND activo = TRUE;

-- +18.7% (era $18200)
UPDATE productos SET precio = 21600.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PASTA DE HUEVO X 5 KILOS' AND activo = TRUE;

-- +14.7% (era $1500)
UPDATE productos SET precio = 1720.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PATA POLLO GOMA' AND activo = TRUE;

-- +18.8% (era $5850)
UPDATE productos SET precio = 6950.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PECHERA TELA NACIONAL L' AND activo = TRUE;

-- +17.4% (era $5750)
UPDATE productos SET precio = 6750.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PECHERA TELA NACIONAL M' AND activo = TRUE;

-- +16.5% (era $5450)
UPDATE productos SET precio = 6350.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PECHERA TELA NACIONAL S' AND activo = TRUE;

-- +20.0% (era $6250)
UPDATE productos SET precio = 7500.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PECHERA TELA NACIONAL XL' AND activo = TRUE;

-- +17.2% (era $4950)
UPDATE productos SET precio = 5800.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PECHERA TELA NACIONAL XS' AND activo = TRUE;

-- +20.5% (era $6350)
UPDATE productos SET precio = 7650.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PECHERA TELA NACIONAL XXL' AND activo = TRUE;

-- -49.3% (era $6700)
UPDATE productos SET precio = 3400.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PELOTA C/MOVIMIENTO CHICA ( USB)' AND activo = TRUE;

-- -36.6% (era $7100)
UPDATE productos SET precio = 4500.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PELOTA C/MOVIMIENTO GRANDE ( USB)' AND activo = TRUE;

-- +4.4% (era $3180)
UPDATE productos SET precio = 3320.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PELOTA FIGURA GDE CHIFLE' AND activo = TRUE;

-- +6.8% (era $2060)
UPDATE productos SET precio = 2200.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PELOTA MACIZA CHICA X 2' AND activo = TRUE;

-- +7.8% (era $3990)
UPDATE productos SET precio = 4300.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PELOTA MACIZA GRANDE' AND activo = TRUE;

-- +15.6% (era $2120)
UPDATE productos SET precio = 2450.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PELOTA MACIZA MEDIANA' AND activo = TRUE;

-- +7.4% (era $1350)
UPDATE productos SET precio = 1450.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PELOTA NUDO CHICA' AND activo = TRUE;

-- +8.0% (era $2640)
UPDATE productos SET precio = 2850.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PELOTA NUDO GRANDE' AND activo = TRUE;

-- +6.4% (era $2020)
UPDATE productos SET precio = 2150.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PELOTA NUDO MEDIANA' AND activo = TRUE;

-- +15.3% (era $6200)
UPDATE productos SET precio = 7150.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PELOTA PINCHE 78MM C/ SOGA' AND activo = TRUE;

-- +11.9% (era $2520)
UPDATE productos SET precio = 2820.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PELOTA RUGBY CON PINCHES' AND activo = TRUE;

-- +11.1% (era $1350)
UPDATE productos SET precio = 1500.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PELOTA SONAJEO' AND activo = TRUE;

-- +13.6% (era $2200)
UPDATE productos SET precio = 2500.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PELOTAS DURAS MEDIANA X2' AND activo = TRUE;

-- +7.0% (era $8880)
UPDATE productos SET precio = 9500.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PELOTAS GOMA BLANDAS GRANDES *12' AND activo = TRUE;

-- +12.5% (era $7200)
UPDATE productos SET precio = 8100.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PELOTAS GOMA BLANDAS MEDIANAS *12' AND activo = TRUE;

-- +7.7% (era $6500)
UPDATE productos SET precio = 7000.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PELOTAS SPORTING CHICA X 12' AND activo = TRUE;

-- +11.2% (era $25900)
UPDATE productos SET precio = 28800.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PELOTAS SPORTING EXTRA GRANDE X 6' AND activo = TRUE;

-- +11.4% (era $22800)
UPDATE productos SET precio = 25400.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PELOTAS SPORTING GRANDE X 12' AND activo = TRUE;

-- +10.9% (era $15600)
UPDATE productos SET precio = 17300.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PELOTAS SPORTING MEDIANA X 12' AND activo = TRUE;

-- +11.9% (era $3180)
UPDATE productos SET precio = 3560.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PERRO CHIFLE' AND activo = TRUE;

-- +11.9% (era $2520)
UPDATE productos SET precio = 2820.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PESA GYM CON PINCHES' AND activo = TRUE;

-- +15.4% (era $780)
UPDATE productos SET precio = 900.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PESCADITO DE GOMA' AND activo = TRUE;

-- +15.6% (era $1600)
UPDATE productos SET precio = 1850.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PESCADO CHIFLE' AND activo = TRUE;

-- +14.8% (era $2700)
UPDATE productos SET precio = 3100.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PEZ TELA' AND activo = TRUE;

-- +11.8% (era $510)
UPDATE productos SET precio = 570.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PLACA BIOLOGICA NATURAL TAMAÑO 9X18' AND activo = TRUE;

-- +12.2% (era $2220)
UPDATE productos SET precio = 2490.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'POLLO AL SPIEDO CHIFLE' AND activo = TRUE;

-- +10.3% (era $4350)
UPDATE productos SET precio = 4800.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PORTA MACETA 30' AND activo = TRUE;

-- +11.3% (era $5750)
UPDATE productos SET precio = 6400.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PORTA MACETA 40' AND activo = TRUE;

-- +10.8% (era $6500)
UPDATE productos SET precio = 7200.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PORTA MACETA 50' AND activo = TRUE;

-- +11.3% (era $7050)
UPDATE productos SET precio = 7850.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PORTA MACETA 60' AND activo = TRUE;

-- +11.4% (era $9650)
UPDATE productos SET precio = 10750.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'PORTA MACETA 80' AND activo = TRUE;

-- +1.4% (era $2220)
UPDATE productos SET precio = 2250.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'QUESO CHIFLE' AND activo = TRUE;

-- +11.9% (era $2520)
UPDATE productos SET precio = 2820.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'RAMA' AND activo = TRUE;

-- +17.3% (era $9850)
UPDATE productos SET precio = 11550.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'RASCADOR CAMA VICTORIA' AND activo = TRUE;

-- +18.6% (era $5650)
UPDATE productos SET precio = 6700.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'RASCADOR CARA DE GATO N°2' AND activo = TRUE;

-- +17.7% (era $7050)
UPDATE productos SET precio = 8300.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'RASCADOR CARA DE GATO N°3' AND activo = TRUE;

-- +17.2% (era $1450)
UPDATE productos SET precio = 1700.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'RASCADOR CILINDRO MEDIANO' AND activo = TRUE;

-- +10.0% (era $10500)
UPDATE productos SET precio = 11550.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'RASCADOR GATO AMI - HOME' AND activo = TRUE;

-- +10.2% (era $13700)
UPDATE productos SET precio = 15100.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'RASCADOR GATO BREAK' AND activo = TRUE;

-- +10.1% (era $18980)
UPDATE productos SET precio = 20900.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'RASCADOR GATO GOUT' AND activo = TRUE;

-- +10.2% (era $13700)
UPDATE productos SET precio = 15100.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'RASCADOR GATO NOMIS' AND activo = TRUE;

-- +17.9% (era $5600)
UPDATE productos SET precio = 6600.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'RASCADOR MINI SIMON' AND activo = TRUE;

-- +25.0% (era $5600)
UPDATE productos SET precio = 7000.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'RASCADOR OLITA' AND activo = TRUE;

-- +18.1% (era $10750)
UPDATE productos SET precio = 12700.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'RASCADOR ONDA' AND activo = TRUE;

-- +17.9% (era $6150)
UPDATE productos SET precio = 7250.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'RASCADOR RECTO GRANDE' AND activo = TRUE;

-- +17.9% (era $10050)
UPDATE productos SET precio = 11850.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'RASCADOR TAYLOR' AND activo = TRUE;

-- +17.9% (era $7000)
UPDATE productos SET precio = 8250.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'RASCADOR TITOS C/PELOTA' AND activo = TRUE;

-- +17.6% (era $4590)
UPDATE productos SET precio = 5400.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'RASCADOR VAINILLA N° 2' AND activo = TRUE;

-- +36.4% (era $990)
UPDATE productos SET precio = 1350.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'RASQUETA DE GOMA' AND activo = TRUE;

-- +14.8% (era $2700)
UPDATE productos SET precio = 3100.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'RATA GRANDE TELA' AND activo = TRUE;

-- +10.8% (era $1670)
UPDATE productos SET precio = 1850.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'RECTANGULAR N° 1' AND activo = TRUE;

-- +10.2% (era $1870)
UPDATE productos SET precio = 2060.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'RECTANGULAR N° 2' AND activo = TRUE;

-- +10.1% (era $2680)
UPDATE productos SET precio = 2950.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'RECTANGULAR N° 3' AND activo = TRUE;

-- +10.3% (era $3915)
UPDATE productos SET precio = 4320.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'RECTANGULAR N° 4' AND activo = TRUE;

-- +10.1% (era $4570)
UPDATE productos SET precio = 5030.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'RECTANGULAR N° 5' AND activo = TRUE;

-- +9.8% (era $15350)
UPDATE productos SET precio = 16850.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'REGADERA PLASTICO 10 LTS MATRI' AND activo = TRUE;

-- +10.3% (era $4850)
UPDATE productos SET precio = 5350.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'REGADERA PLASTICO 2 LTS MATRI' AND activo = TRUE;

-- +10.0% (era $8500)
UPDATE productos SET precio = 9350.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'REGADERA PLASTICO 5 LTS MATRI' AND activo = TRUE;

-- +10.0% (era $4680)
UPDATE productos SET precio = 5150.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'RODENTICIDA 1 LT' AND activo = TRUE;

-- +10.7% (era $2800)
UPDATE productos SET precio = 3100.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'RODENTICIDA 500 CC' AND activo = TRUE;

-- +9.8% (era $6970)
UPDATE productos SET precio = 7650.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'RS 086' AND activo = TRUE;

-- +15.6% (era $1600)
UPDATE productos SET precio = 1850.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'RUEDA CHIFLE' AND activo = TRUE;

-- +10.0% (era $35600)
UPDATE productos SET precio = 39160.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'SHAMPOO HIPOALARGENICO 5 LTS' AND activo = TRUE;

-- +10.0% (era $35000)
UPDATE productos SET precio = 38500.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'SHAMPOO NEUTRO 5 LTS' AND activo = TRUE;

-- +10.0% (era $35600)
UPDATE productos SET precio = 39160.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'SHAMPOO PULGUICIDAS 5 LTS' AND activo = TRUE;

-- +9.1% (era $1100)
UPDATE productos SET precio = 1200.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'SOGA 25 CM' AND activo = TRUE;

-- +13.7% (era $2550)
UPDATE productos SET precio = 2900.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'SOGA 3 NUDOS' AND activo = TRUE;

-- +8.9% (era $1790)
UPDATE productos SET precio = 1950.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'SOGA 35 CM' AND activo = TRUE;

-- +10.4% (era $3080)
UPDATE productos SET precio = 3400.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'SOGA 4 NUDOS' AND activo = TRUE;

-- +10.4% (era $3940)
UPDATE productos SET precio = 4350.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'SOGA 5 NUDOS' AND activo = TRUE;

-- +3.4% (era $4450)
UPDATE productos SET precio = 4600.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'SOGA 55 CM RETORCIDA' AND activo = TRUE;

-- +8.1% (era $1850)
UPDATE productos SET precio = 2000.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'SOGA CON DOBLE MORDILLO' AND activo = TRUE;

-- +10.2% (era $2350)
UPDATE productos SET precio = 2590.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'SOGA CON PELOTA DE TENIS' AND activo = TRUE;

-- +8.0% (era $2500)
UPDATE productos SET precio = 2700.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'SOGA HUESO CON 1 PELOTA 60 MM' AND activo = TRUE;

-- +1.6% (era $3050)
UPDATE productos SET precio = 3100.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'SOGA HUESO CON 2 PELOTAS 60 MM' AND activo = TRUE;

-- +7.6% (era $1450)
UPDATE productos SET precio = 1560.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'SOGUITA C/ 1 PELOTA 40 MM' AND activo = TRUE;

-- +7.6% (era $1980)
UPDATE productos SET precio = 2130.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'SOGUITA C/ 2 PELOTAS 40 MM' AND activo = TRUE;

-- +7.8% (era $2570)
UPDATE productos SET precio = 2770.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'SOGUITA C/ 3 PELOTAS 40 MM' AND activo = TRUE;

-- +7.0% (era $3150)
UPDATE productos SET precio = 3370.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'SOGUITA C/ 4 PELOTAS 40 MM' AND activo = TRUE;

-- +10.0% (era $4750)
UPDATE productos SET precio = 5225.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'SPRAY IMIDA 100 CC' AND activo = TRUE;

-- +6.3% (era $9880)
UPDATE productos SET precio = 10500.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'SUPER PALITOS 200 UNIDADES' AND activo = TRUE;

-- +2.1% (era $475)
UPDATE productos SET precio = 485.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA BOLS MONACO N15' AND activo = TRUE;

-- +15.3% (era $555)
UPDATE productos SET precio = 640.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA BOLS MONACO N18' AND activo = TRUE;

-- +14.3% (era $980)
UPDATE productos SET precio = 1120.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA BOLS MONACO N21' AND activo = TRUE;

-- +7.9% (era $2670)
UPDATE productos SET precio = 2880.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA BARRILITO' AND activo = TRUE;

-- +1.9% (era $1080)
UPDATE productos SET precio = 1100.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA CONICA PREMIUM N12' AND activo = TRUE;

-- +8.8% (era $1930)
UPDATE productos SET precio = 2100.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA CONICA PREMIUM N16' AND activo = TRUE;

-- +1.2% (era $1245)
UPDATE productos SET precio = 1260.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA CUADRADA PREMIUM N° 12' AND activo = TRUE;

-- +8.5% (era $2175)
UPDATE productos SET precio = 2360.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA CUADRADA PREMIUM N° 16' AND activo = TRUE;

-- +7.2% (era $4050)
UPDATE productos SET precio = 4340.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA CUADRADA PREMIUM N° 20' AND activo = TRUE;

-- +7.5% (era $2140)
UPDATE productos SET precio = 2300.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA IBIZA N 25' AND activo = TRUE;

-- +2.3% (era $3520)
UPDATE productos SET precio = 3600.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA IBIZA N 30' AND activo = TRUE;

-- +10.6% (era $5210)
UPDATE productos SET precio = 5760.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA IBIZA N 35' AND activo = TRUE;

-- +11.1% (era $6740)
UPDATE productos SET precio = 7490.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA IBIZA N 40' AND activo = TRUE;

-- +21.1% (era $1800)
UPDATE productos SET precio = 2180.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA JARDINERA 35 CM COLOR' AND activo = TRUE;

-- +22.8% (era $2500)
UPDATE productos SET precio = 3070.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA JARDINERA 45 CM COLOR' AND activo = TRUE;

-- +16.9% (era $4150)
UPDATE productos SET precio = 4850.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA JARDINERA 55 CM COLOR' AND activo = TRUE;

-- +18.9% (era $7000)
UPDATE productos SET precio = 8320.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA JARDINERA 65 CM COLOR' AND activo = TRUE;

-- +36.1% (era $1690)
UPDATE productos SET precio = 2300.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA PARIS N18' AND activo = TRUE;

-- +25.9% (era $3335)
UPDATE productos SET precio = 4200.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA PARIS N22' AND activo = TRUE;

-- +23.8% (era $5315)
UPDATE productos SET precio = 6580.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA PARIS N27' AND activo = TRUE;

-- +9.6% (era $1140)
UPDATE productos SET precio = 1250.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA REDONDA PREMIUM N° 12' AND activo = TRUE;

-- +12.6% (era $1820)
UPDATE productos SET precio = 2050.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA REDONDA PREMIUM N° 16' AND activo = TRUE;

-- +7.0% (era $2485)
UPDATE productos SET precio = 2660.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA REDONDA PREMIUM N° 18' AND activo = TRUE;

-- +19.3% (era $4050)
UPDATE productos SET precio = 4830.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA REDONDA PREMIUM N° 22' AND activo = TRUE;

-- +20.8% (era $7360)
UPDATE productos SET precio = 8890.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA REDONDA PREMIUM N° 27' AND activo = TRUE;

-- +23.2% (era $13295)
UPDATE productos SET precio = 16380.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA REDONDA PREMIUM N° 35' AND activo = TRUE;

-- +33.8% (era $370)
UPDATE productos SET precio = 495.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA ROCIO N° 12' AND activo = TRUE;

-- +20.2% (era $520)
UPDATE productos SET precio = 625.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA ROCIO N° 14' AND activo = TRUE;

-- +22.9% (era $895)
UPDATE productos SET precio = 1100.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA ROCIO N° 17' AND activo = TRUE;

-- +22.4% (era $1185)
UPDATE productos SET precio = 1450.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA ROCIO N° 19' AND activo = TRUE;

-- +25.9% (era $1370)
UPDATE productos SET precio = 1725.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA ROCIO N° 21' AND activo = TRUE;

-- +12.5% (era $1840)
UPDATE productos SET precio = 2070.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA ROCIO N° 24' AND activo = TRUE;

-- +29.7% (era $3330)
UPDATE productos SET precio = 4320.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA ROCIO N° 30' AND activo = TRUE;

-- +27.4% (era $5000)
UPDATE productos SET precio = 6370.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MACETA ROCIO N° 35' AND activo = TRUE;

-- +13.8% (era $1485)
UPDATE productos SET precio = 1690.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MENSULA N2' AND activo = TRUE;

-- +19.7% (era $1805)
UPDATE productos SET precio = 2160.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MENSULA N3' AND activo = TRUE;

-- +27.8% (era $1800)
UPDATE productos SET precio = 2300.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MILAN N° 16' AND activo = TRUE;

-- +35.3% (era $2950)
UPDATE productos SET precio = 3990.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MILAN N° 20' AND activo = TRUE;

-- +31.6% (era $5850)
UPDATE productos SET precio = 7700.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA MILAN N° 25' AND activo = TRUE;

-- -25.3% (era $375)
UPDATE productos SET precio = 280.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA PLATOS REDONDOS N12' AND activo = TRUE;

-- -9.1% (era $385)
UPDATE productos SET precio = 350.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA PLATOS REDONDOS N14' AND activo = TRUE;

-- +10.0% (era $400)
UPDATE productos SET precio = 440.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA PLATOS REDONDOS N16' AND activo = TRUE;

-- +5.8% (era $520)
UPDATE productos SET precio = 550.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA PLATOS REDONDOS N18' AND activo = TRUE;

-- +14.9% (era $670)
UPDATE productos SET precio = 770.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA PLATOS REDONDOS N20' AND activo = TRUE;

-- +20.5% (era $780)
UPDATE productos SET precio = 940.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA PLATOS REDONDOS N22' AND activo = TRUE;

-- +24.6% (era $955)
UPDATE productos SET precio = 1190.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA PLATOS REDONDOS N24' AND activo = TRUE;

-- +17.4% (era $1150)
UPDATE productos SET precio = 1350.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA PLATOS REDONDOS N26' AND activo = TRUE;

-- +20.0% (era $1350)
UPDATE productos SET precio = 1620.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA PLATOS REDONDOS N28' AND activo = TRUE;

-- +25.7% (era $1655)
UPDATE productos SET precio = 2080.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA PLATOS REDONDOS N32' AND activo = TRUE;

-- +25.1% (era $2350)
UPDATE productos SET precio = 2940.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TA VENECIA N° 17' AND activo = TRUE;

-- +9.9% (era $3550)
UPDATE productos SET precio = 3900.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TALCO X 100 GR PULGUICIDA' AND activo = TRUE;

-- +5.0% (era $29200)
UPDATE productos SET precio = 30670.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TERMIXAN BLOQUE 1 KGR ( 2+1 )' AND activo = TRUE;

-- +8.0% (era $2500)
UPDATE productos SET precio = 2700.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TIRADOR SOFT CON PELOTA 60 MM' AND activo = TRUE;

-- +15.8% (era $1330)
UPDATE productos SET precio = 1540.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TOLVA PARA ALIMENTOS N° 1' AND activo = TRUE;

-- +17.4% (era $2980)
UPDATE productos SET precio = 3500.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TOLVA PARA ALIMENTOS N° 2' AND activo = TRUE;

-- +17.5% (era $3080)
UPDATE productos SET precio = 3620.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TOLVA ROBER BOLSA CON 2 UNIDADES' AND activo = TRUE;

-- +13.3% (era $750)
UPDATE productos SET precio = 850.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TRAMPA PLASTICA PARA LAUCHA COYOYE' AND activo = TRUE;

-- +12.0% (era $2000)
UPDATE productos SET precio = 2240.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TRIANGULO CON PINCHES' AND activo = TRUE;

-- +10.0% (era $3900)
UPDATE productos SET precio = 4290.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TRIUNFO 450 CC' AND activo = TRUE;

-- +9.5% (era $1890)
UPDATE productos SET precio = 2070.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TROPICAL 10 GR' AND activo = TRUE;

-- +9.9% (era $3440)
UPDATE productos SET precio = 3780.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TROPICAL 20 GR' AND activo = TRUE;

-- +345.5% (era $550)
UPDATE productos SET precio = 2450.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'TUTORES GRANDES' AND activo = TRUE;

-- +21.4% (era $33770)
UPDATE productos SET precio = 40980.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'ULTRA BOM MATA CUCARACHAS X12' AND activo = TRUE;

-- +12.4% (era $41260)
UPDATE productos SET precio = 46360.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'ULTRA GRANOS 5 KG' AND activo = TRUE;

-- +12.6% (era $33500)
UPDATE productos SET precio = 37720.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'ULTRA GRANOS 50 GR X 30 UNID' AND activo = TRUE;

-- +12.3% (era $28100)
UPDATE productos SET precio = 31570.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'ULTRA MOSCAS 30 GR X 18' AND activo = TRUE;

-- +5.1% (era $9860)
UPDATE productos SET precio = 10360.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'VELOXAN 250 CC' AND activo = TRUE;

-- +11.9% (era $7400)
UPDATE productos SET precio = 8280.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'VENTOSA EN CAJA X 50 UNIDADES' AND activo = TRUE;

-- +15.5% (era $17750)
UPDATE productos SET precio = 20500.0, updated_at = NOW()
  WHERE UPPER(nombre) = 'VIRUTA COMPACTADA X 4 LT' AND activo = TRUE;


-- ============================================================
-- PARTE 2: INSERT productos nuevos (247 productos)
-- (Productos que están en el PDF pero no estaban en el Excel)
-- ============================================================

-- NUEVO: 40X30X20 3MM = $12600
-- INSERT INTO productos (nombre, precio, activo) VALUES ('40X30X20 3MM', 12600.0, TRUE);

-- NUEVO: 50X35X20 4MM = $22300
-- INSERT INTO productos (nombre, precio, activo) VALUES ('50X35X20 4MM', 22300.0, TRUE);

-- NUEVO: 60X35X20 4MM = $25100
-- INSERT INTO productos (nombre, precio, activo) VALUES ('60X35X20 4MM', 25100.0, TRUE);

-- NUEVO: 70X35X20 4MM = $28750
-- INSERT INTO productos (nombre, precio, activo) VALUES ('70X35X20 4MM', 28750.0, TRUE);

-- NUEVO: 80X35X20 5 MM = $32400
-- INSERT INTO productos (nombre, precio, activo) VALUES ('80X35X20 5 MM', 32400.0, TRUE);

-- NUEVO: 90X35X20 6MM = $50100
-- INSERT INTO productos (nombre, precio, activo) VALUES ('90X35X20 6MM', 50100.0, TRUE);

-- NUEVO: ANANA = $2150
-- INSERT INTO productos (nombre, precio, activo) VALUES ('ANANA', 2150.0, TRUE);

-- NUEVO: ARNES REGULABLE L = $5900
-- INSERT INTO productos (nombre, precio, activo) VALUES ('ARNES REGULABLE L', 5900.0, TRUE);

-- NUEVO: ARNES REGULABLE M = $5250
-- INSERT INTO productos (nombre, precio, activo) VALUES ('ARNES REGULABLE M', 5250.0, TRUE);

-- NUEVO: ARNES REGULABLE S = $4800
-- INSERT INTO productos (nombre, precio, activo) VALUES ('ARNES REGULABLE S', 4800.0, TRUE);

-- NUEVO: ARNES REGULABLE XL = $6350
-- INSERT INTO productos (nombre, precio, activo) VALUES ('ARNES REGULABLE XL', 6350.0, TRUE);

-- NUEVO: ARNES REGULABLE XS = $4450
-- INSERT INTO productos (nombre, precio, activo) VALUES ('ARNES REGULABLE XS', 4450.0, TRUE);

-- NUEVO: ARNES REGULABLE XXL = $6800
-- INSERT INTO productos (nombre, precio, activo) VALUES ('ARNES REGULABLE XXL', 6800.0, TRUE);

-- NUEVO: BEBEDEROS POLLOS 3 LITROS = $5200
-- INSERT INTO productos (nombre, precio, activo) VALUES ('BEBEDEROS POLLOS 3 LITROS', 5200.0, TRUE);

-- NUEVO: BLANCO 5 LTS = $68690
-- INSERT INTO productos (nombre, precio, activo) VALUES ('BLANCO 5 LTS', 68690.0, TRUE);

-- NUEVO: BLANCO SHAMPOO = $7050
-- INSERT INTO productos (nombre, precio, activo) VALUES ('BLANCO SHAMPOO', 7050.0, TRUE);

-- NUEVO: BLISTER COLLAR PARA GATOS X 12 U LUMINOSO = $10800
-- INSERT INTO productos (nombre, precio, activo) VALUES ('BLISTER COLLAR PARA GATOS X 12 U LUMINOSO', 10800.0, TRUE);

-- NUEVO: BOLSO IMPORTADO N°1 40*20*28 = $12500
-- INSERT INTO productos (nombre, precio, activo) VALUES ('BOLSO IMPORTADO N°1 40*20*28', 12500.0, TRUE);

-- NUEVO: BOLSO IMPORTADO N°2 48*20*30 = $14600
-- INSERT INTO productos (nombre, precio, activo) VALUES ('BOLSO IMPORTADO N°2 48*20*30', 14600.0, TRUE);

-- NUEVO: BOLSO TRANPORTADOR CHICO = $22350
-- INSERT INTO productos (nombre, precio, activo) VALUES ('BOLSO TRANPORTADOR CHICO', 22350.0, TRUE);

-- NUEVO: BOLSO TRANPORTADOR GRANDE = $25950
-- INSERT INTO productos (nombre, precio, activo) VALUES ('BOLSO TRANPORTADOR GRANDE', 25950.0, TRUE);

-- NUEVO: BOMBA RS 023 3000 L/H 2,0 MT = $36950
-- INSERT INTO productos (nombre, precio, activo) VALUES ('BOMBA RS 023 3000 L/H 2,0 MT', 36950.0, TRUE);

-- NUEVO: BOMBA RS 942 1000 L/H 2,0 MT = $22500
-- INSERT INTO productos (nombre, precio, activo) VALUES ('BOMBA RS 942 1000 L/H 2,0 MT', 22500.0, TRUE);

-- NUEVO: BOMBA RS 952 2500 L/H 2,5 MT = $35550
-- INSERT INTO productos (nombre, precio, activo) VALUES ('BOMBA RS 952 2500 L/H 2,5 MT', 35550.0, TRUE);

-- NUEVO: BOZAL CANASTA N° 4 = $4000
-- INSERT INTO productos (nombre, precio, activo) VALUES ('BOZAL CANASTA N° 4', 4000.0, TRUE);

-- NUEVO: BOZAL CANASTA N° 7 = $6750
-- INSERT INTO productos (nombre, precio, activo) VALUES ('BOZAL CANASTA N° 7', 6750.0, TRUE);

-- NUEVO: CACHORROS SHAMPOO = $6350
-- INSERT INTO productos (nombre, precio, activo) VALUES ('CACHORROS SHAMPOO', 6350.0, TRUE);

-- NUEVO: CADENA DE ATAR 4MM 2 MTS = $2850
-- INSERT INTO productos (nombre, precio, activo) VALUES ('CADENA DE ATAR 4MM 2 MTS', 2850.0, TRUE);

-- NUEVO: CADENA DE ATAR 6MM 2 MTS = $3850
-- INSERT INTO productos (nombre, precio, activo) VALUES ('CADENA DE ATAR 6MM 2 MTS', 3850.0, TRUE);

-- NUEVO: CADENA PASEO N1 2 MM = $1450
-- INSERT INTO productos (nombre, precio, activo) VALUES ('CADENA PASEO N1 2 MM', 1450.0, TRUE);

-- NUEVO: CADENA PASEO N2 2,5 MM = $1850
-- INSERT INTO productos (nombre, precio, activo) VALUES ('CADENA PASEO N2 2,5 MM', 1850.0, TRUE);

-- NUEVO: CADENA PASEO N3 3 MM = $2200
-- INSERT INTO productos (nombre, precio, activo) VALUES ('CADENA PASEO N3 3 MM', 2200.0, TRUE);

-- NUEVO: CADENA PASEO N4 3,5 MM = $2750
-- INSERT INTO productos (nombre, precio, activo) VALUES ('CADENA PASEO N4 3,5 MM', 2750.0, TRUE);

-- NUEVO: CADENA PASEO N5 4 MM = $2950
-- INSERT INTO productos (nombre, precio, activo) VALUES ('CADENA PASEO N5 4 MM', 2950.0, TRUE);

-- NUEVO: CAJA MASCOTA N°1 40*40*40 = $30000
-- INSERT INTO productos (nombre, precio, activo) VALUES ('CAJA MASCOTA N°1 40*40*40', 30000.0, TRUE);

-- NUEVO: CAJA MASCOTA N°2 72*40*40 = $45000
-- INSERT INTO productos (nombre, precio, activo) VALUES ('CAJA MASCOTA N°2 72*40*40', 45000.0, TRUE);

-- NUEVO: CAJA MASCOTA N°3 48*40*64 = $52000
-- INSERT INTO productos (nombre, precio, activo) VALUES ('CAJA MASCOTA N°3 48*40*64', 52000.0, TRUE);

-- NUEVO: CAJA X 20 UNID FRAGANCIAS = $169750
-- INSERT INTO productos (nombre, precio, activo) VALUES ('CAJA X 20 UNID FRAGANCIAS', 169750.0, TRUE);

-- NUEVO: CAMA PALTA M 70*70 = $38100
-- INSERT INTO productos (nombre, precio, activo) VALUES ('CAMA PALTA M 70*70', 38100.0, TRUE);

-- NUEVO: CANASTO PARA AUTO = $27250
-- INSERT INTO productos (nombre, precio, activo) VALUES ('CANASTO PARA AUTO', 27250.0, TRUE);

-- NUEVO: CAPXAN F CAPSULAS X 15 U = $10430
-- INSERT INTO productos (nombre, precio, activo) VALUES ('CAPXAN F CAPSULAS X 15 U', 10430.0, TRUE);

-- NUEVO: CAPXAN I CAPSULAS X 15 U = $9920
-- INSERT INTO productos (nombre, precio, activo) VALUES ('CAPXAN I CAPSULAS X 15 U', 9920.0, TRUE);

-- NUEVO: CARDINA MADERA GRANDE = $2380
-- INSERT INTO productos (nombre, precio, activo) VALUES ('CARDINA MADERA GRANDE', 2380.0, TRUE);

-- NUEVO: CEPILLO DOBLE MEDIANO PLASTICO = $2400
-- INSERT INTO productos (nombre, precio, activo) VALUES ('CEPILLO DOBLE MEDIANO PLASTICO', 2400.0, TRUE);

-- NUEVO: CERCO PLASTICO SIMIL PIEDRA 60 CM = $1600
-- INSERT INTO productos (nombre, precio, activo) VALUES ('CERCO PLASTICO SIMIL PIEDRA 60 CM', 1600.0, TRUE);

-- NUEVO: COBERTOR M 90*90 = $27300
-- INSERT INTO productos (nombre, precio, activo) VALUES ('COBERTOR M 90*90', 27300.0, TRUE);

-- NUEVO: COBERTOR XL 90*120 = $37800
-- INSERT INTO productos (nombre, precio, activo) VALUES ('COBERTOR XL 90*120', 37800.0, TRUE);

-- NUEVO: COLCHONETA DOBLE CORDURA LISA N°2 = $19400
-- INSERT INTO productos (nombre, precio, activo) VALUES ('COLCHONETA DOBLE CORDURA LISA N°2', 19400.0, TRUE);

-- NUEVO: COLCHONETA DOBLE CORDURA LISA N°3 = $24000
-- INSERT INTO productos (nombre, precio, activo) VALUES ('COLCHONETA DOBLE CORDURA LISA N°3', 24000.0, TRUE);

-- NUEVO: COLCHONETA DOBLE CORDURA LISA N°4 = $31650
-- INSERT INTO productos (nombre, precio, activo) VALUES ('COLCHONETA DOBLE CORDURA LISA N°4', 31650.0, TRUE);

-- NUEVO: COLCHONETA FINA GUATA-MICROFIBRA 45*55 N1 = $3900
-- INSERT INTO productos (nombre, precio, activo) VALUES ('COLCHONETA FINA GUATA-MICROFIBRA 45*55 N1', 3900.0, TRUE);

-- NUEVO: COLCHONETA FINA GUATA-MICROFIBRA 50*65 N2 = $5100
-- INSERT INTO productos (nombre, precio, activo) VALUES ('COLCHONETA FINA GUATA-MICROFIBRA 50*65 N2', 5100.0, TRUE);

-- NUEVO: COLCHONETA FINA GUATA-MICROFIBRA 60*80 N3 = $6800
-- INSERT INTO productos (nombre, precio, activo) VALUES ('COLCHONETA FINA GUATA-MICROFIBRA 60*80 N3', 6800.0, TRUE);

-- NUEVO: COLCHONETA FINA GUATA-MICROFIBRA 70*90 N4 = $8650
-- INSERT INTO productos (nombre, precio, activo) VALUES ('COLCHONETA FINA GUATA-MICROFIBRA 70*90 N4', 8650.0, TRUE);

-- NUEVO: COLCHONETA FINA GUATA-MICROFIBRA 90*90 N5 = $11100
-- INSERT INTO productos (nombre, precio, activo) VALUES ('COLCHONETA FINA GUATA-MICROFIBRA 90*90 N5', 11100.0, TRUE);

-- NUEVO: COLCHONETA TRANSPORTABLE 50 X 60 N1 = $6950
-- INSERT INTO productos (nombre, precio, activo) VALUES ('COLCHONETA TRANSPORTABLE 50 X 60 N1', 6950.0, TRUE);

-- NUEVO: COLLAR 2,5 MM 4 HUESOS = $3580
-- INSERT INTO productos (nombre, precio, activo) VALUES ('COLLAR 2,5 MM 4 HUESOS', 3580.0, TRUE);

-- NUEVO: COLLAR GATOS ANIMAL PRINT X4 = $3650
-- INSERT INTO productos (nombre, precio, activo) VALUES ('COLLAR GATOS ANIMAL PRINT X4', 3650.0, TRUE);

-- NUEVO: COLLAR GATOS FOSFORECENTE X4 = $3650
-- INSERT INTO productos (nombre, precio, activo) VALUES ('COLLAR GATOS FOSFORECENTE X4', 3650.0, TRUE);

-- NUEVO: COLLAR GATOS LUMINOSO X4 = $3650
-- INSERT INTO productos (nombre, precio, activo) VALUES ('COLLAR GATOS LUMINOSO X4', 3650.0, TRUE);

-- NUEVO: COLLAR NATO 40MM 55 CM = $3200
-- INSERT INTO productos (nombre, precio, activo) VALUES ('COLLAR NATO 40MM 55 CM', 3200.0, TRUE);

-- NUEVO: COLLAR NATO 40MM 65 CM = $3350
-- INSERT INTO productos (nombre, precio, activo) VALUES ('COLLAR NATO 40MM 65 CM', 3350.0, TRUE);

-- NUEVO: COLLAR NATO 40MM 70 CM = $3450
-- INSERT INTO productos (nombre, precio, activo) VALUES ('COLLAR NATO 40MM 70 CM', 3450.0, TRUE);

-- NUEVO: COMEDERO ACERO CAZUELA GDE = $9400
-- INSERT INTO productos (nombre, precio, activo) VALUES ('COMEDERO ACERO CAZUELA GDE', 9400.0, TRUE);

-- NUEVO: COMEDERO ACERO DOBLE CHICO = $7850
-- INSERT INTO productos (nombre, precio, activo) VALUES ('COMEDERO ACERO DOBLE CHICO', 7850.0, TRUE);

-- NUEVO: COMEDERO ACERO DOBLE GDE = $8650
-- INSERT INTO productos (nombre, precio, activo) VALUES ('COMEDERO ACERO DOBLE GDE', 8650.0, TRUE);

-- NUEVO: COMEDERO ACERO PINTADO 18 CM = $3300
-- INSERT INTO productos (nombre, precio, activo) VALUES ('COMEDERO ACERO PINTADO 18 CM', 3300.0, TRUE);

-- NUEVO: COMEDERO CAZUELA DOBLE CON BASE MADERA 34*17*10 = $14000
-- INSERT INTO productos (nombre, precio, activo) VALUES ('COMEDERO CAZUELA DOBLE CON BASE MADERA 34*17*10', 14000.0, TRUE);

-- NUEVO: COMEDERO DOBLE CHICO PARA GATO = $940
-- INSERT INTO productos (nombre, precio, activo) VALUES ('COMEDERO DOBLE CHICO PARA GATO', 940.0, TRUE);

-- NUEVO: CORREA LISA N° 3 2 MTS = $3100
-- INSERT INTO productos (nombre, precio, activo) VALUES ('CORREA LISA N° 3 2 MTS', 3100.0, TRUE);

-- NUEVO: CORREA LISA N° 3 3 MTS = $3750
-- INSERT INTO productos (nombre, precio, activo) VALUES ('CORREA LISA N° 3 3 MTS', 3750.0, TRUE);

-- NUEVO: CORREA LISA N° 3 5 MTS = $4650
-- INSERT INTO productos (nombre, precio, activo) VALUES ('CORREA LISA N° 3 5 MTS', 4650.0, TRUE);

-- NUEVO: CORREA LISA N° 4 2 MTS = $3370
-- INSERT INTO productos (nombre, precio, activo) VALUES ('CORREA LISA N° 4 2 MTS', 3370.0, TRUE);

-- NUEVO: CORREA LISA N° 4 3 MTS = $4150
-- INSERT INTO productos (nombre, precio, activo) VALUES ('CORREA LISA N° 4 3 MTS', 4150.0, TRUE);

-- NUEVO: CORREA LISA N° 4 5 MTS = $5180
-- INSERT INTO productos (nombre, precio, activo) VALUES ('CORREA LISA N° 4 5 MTS', 5180.0, TRUE);

-- NUEVO: CUCARACHISIDA AEROSOL ESCUDO = $3250
-- INSERT INTO productos (nombre, precio, activo) VALUES ('CUCARACHISIDA AEROSOL ESCUDO', 3250.0, TRUE);

-- NUEVO: CUCARACHISIDA EN POLVO X 50 SOBRES = $16000
-- INSERT INTO productos (nombre, precio, activo) VALUES ('CUCARACHISIDA EN POLVO X 50 SOBRES', 16000.0, TRUE);

-- NUEVO: CURABICHERA CURABIGEN = $6400
-- INSERT INTO productos (nombre, precio, activo) VALUES ('CURABICHERA CURABIGEN', 6400.0, TRUE);

-- NUEVO: EXAGONAL N° 5 18X29X35 4MM = $15700
-- INSERT INTO productos (nombre, precio, activo) VALUES ('EXAGONAL N° 5 18X29X35 4MM', 15700.0, TRUE);

-- NUEVO: FERTTIFOX FOLLAJE 1 LT = $13200
-- INSERT INTO productos (nombre, precio, activo) VALUES ('FERTTIFOX FOLLAJE 1 LT', 13200.0, TRUE);

-- NUEVO: GRANZA MULTICOLOR 500 GRS = $2050
-- INSERT INTO productos (nombre, precio, activo) VALUES ('GRANZA MULTICOLOR 500 GRS', 2050.0, TRUE);

-- NUEVO: GUANTE QUITA PELUSA = $3500
-- INSERT INTO productos (nombre, precio, activo) VALUES ('GUANTE QUITA PELUSA', 3500.0, TRUE);

-- NUEVO: HAMSTERA CON TAPA 3MM = $14700
-- INSERT INTO productos (nombre, precio, activo) VALUES ('HAMSTERA CON TAPA 3MM', 14700.0, TRUE);

-- NUEVO: HIERBA GATERA OSO CON RESORTE = $2400
-- INSERT INTO productos (nombre, precio, activo) VALUES ('HIERBA GATERA OSO CON RESORTE', 2400.0, TRUE);

-- NUEVO: HIPOALARGENICO SHAMPOO = $6490
-- INSERT INTO productos (nombre, precio, activo) VALUES ('HIPOALARGENICO SHAMPOO', 6490.0, TRUE);

-- NUEVO: HORMONA LIQ 75CC = $7000
-- INSERT INTO productos (nombre, precio, activo) VALUES ('HORMONA LIQ 75CC', 7000.0, TRUE);

-- NUEVO: INSECTICIDA GORRION 500 CC = $5140
-- INSERT INTO productos (nombre, precio, activo) VALUES ('INSECTICIDA GORRION 500 CC', 5140.0, TRUE);

-- NUEVO: INSECTICIDA TRIUNFO 500 CC = $5160
-- INSERT INTO productos (nombre, precio, activo) VALUES ('INSECTICIDA TRIUNFO 500 CC', 5160.0, TRUE);

-- NUEVO: JUGUETES PELUCHES SURTIDOS ( 10+1) = $1200
-- INSERT INTO productos (nombre, precio, activo) VALUES ('JUGUETES PELUCHES SURTIDOS ( 10+1)', 1200.0, TRUE);

-- NUEVO: JUMPER JUMBO C/PINCHES = $5600
-- INSERT INTO productos (nombre, precio, activo) VALUES ('JUMPER JUMBO C/PINCHES', 5600.0, TRUE);

-- NUEVO: LECHUGA CHIFLE = $2050
-- INSERT INTO productos (nombre, precio, activo) VALUES ('LECHUGA CHIFLE', 2050.0, TRUE);

-- NUEVO: LENGUETERO LARGO X 50 = $3250
-- INSERT INTO productos (nombre, precio, activo) VALUES ('LENGUETERO LARGO X 50', 3250.0, TRUE);

-- NUEVO: LINEAL 5 CM X2 = $4790
-- INSERT INTO productos (nombre, precio, activo) VALUES ('LINEAL 5 CM X2', 4790.0, TRUE);

-- NUEVO: LITERA CERRADA N°1 57*54*36 = $25000
-- INSERT INTO productos (nombre, precio, activo) VALUES ('LITERA CERRADA N°1 57*54*36', 25000.0, TRUE);

-- NUEVO: LOCION X 1 LITRO = $37150
-- INSERT INTO productos (nombre, precio, activo) VALUES ('LOCION X 1 LITRO', 37150.0, TRUE);

-- NUEVO: LUZ LED KTM 638 12W = $17400
-- INSERT INTO productos (nombre, precio, activo) VALUES ('LUZ LED KTM 638 12W', 17400.0, TRUE);

-- NUEVO: MACETA BOLS N 18 C/GANCHO (MARRON) = $580
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MACETA BOLS N 18 C/GANCHO (MARRON)', 580.0, TRUE);

-- NUEVO: MACETA COMUN N° 10 = $190
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MACETA COMUN N° 10', 190.0, TRUE);

-- NUEVO: MACETA COMUN N° 6 = $90
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MACETA COMUN N° 6', 90.0, TRUE);

-- NUEVO: MACETA COMUN N° 8 = $170
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MACETA COMUN N° 8', 170.0, TRUE);

-- NUEVO: MACETA PIRAMIDAL N° 10 = $230
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MACETA PIRAMIDAL N° 10', 230.0, TRUE);

-- NUEVO: MACETA PIRAMIDAL N° 12 = $370
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MACETA PIRAMIDAL N° 12', 370.0, TRUE);

-- NUEVO: MACETA PIRAMIDAL N° 6 = $110
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MACETA PIRAMIDAL N° 6', 110.0, TRUE);

-- NUEVO: MACETA PIRAMIDAL N° 8 = $190
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MACETA PIRAMIDAL N° 8', 190.0, TRUE);

-- NUEVO: MANTA PARA LAMER CUADRADA 20*20 = $4070
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MANTA PARA LAMER CUADRADA 20*20', 4070.0, TRUE);

-- NUEVO: MATELASSE ESTAMPADOS N°4 = $2660
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MATELASSE ESTAMPADOS N°4', 2660.0, TRUE);

-- NUEVO: MEDIANOS IMPORTADO = $10800
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MEDIANOS IMPORTADO', 10800.0, TRUE);

-- NUEVO: MIX FRUTAL 5 LTS = $53850
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MIX FRUTAL 5 LTS', 53850.0, TRUE);

-- NUEVO: MIX FRUTAL SHAMPOO = $6250
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MIX FRUTAL SHAMPOO', 6250.0, TRUE);

-- NUEVO: MOCHILA CANGURO L = $18150
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOCHILA CANGURO L', 18150.0, TRUE);

-- NUEVO: MOCHILA CANGURO M = $17950
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOCHILA CANGURO M', 17950.0, TRUE);

-- NUEVO: MOCHILA CANGURO XL = $18400
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOCHILA CANGURO XL', 18400.0, TRUE);

-- NUEVO: MOISES BALLENA M 70*70 = $40100
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES BALLENA M 70*70', 40100.0, TRUE);

-- NUEVO: MOISES BALLENA S 50*50 = $33300
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES BALLENA S 50*50', 33300.0, TRUE);

-- NUEVO: MOISES BRUSELAS N° 1 70 CM = $31550
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES BRUSELAS N° 1 70 CM', 31550.0, TRUE);

-- NUEVO: MOISES BRUSELAS N° 2 90 CM = $36800
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES BRUSELAS N° 2 90 CM', 36800.0, TRUE);

-- NUEVO: MOISES CAMUFLADO JACKY N°2 = $10600
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES CAMUFLADO JACKY N°2', 10600.0, TRUE);

-- NUEVO: MOISES CAMUFLADO JACKY N°3 = $12400
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES CAMUFLADO JACKY N°3', 12400.0, TRUE);

-- NUEVO: MOISES CAMUFLADO JACKY N°4 = $16600
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES CAMUFLADO JACKY N°4', 16600.0, TRUE);

-- NUEVO: MOISES CAMUFLADO JACKY N°5 = $19400
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES CAMUFLADO JACKY N°5', 19400.0, TRUE);

-- NUEVO: MOISES GARRITA L 90*90 = $56400
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES GARRITA L 90*90', 56400.0, TRUE);

-- NUEVO: MOISES GARRITA M 70*70 = $39300
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES GARRITA M 70*70', 39300.0, TRUE);

-- NUEVO: MOISES GARRITA S 50*50 = $32700
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES GARRITA S 50*50', 32700.0, TRUE);

-- NUEVO: MOISES GATITO M 7*70 = $37200
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES GATITO M 7*70', 37200.0, TRUE);

-- NUEVO: MOISES GATITO S 50*50 = $31200
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES GATITO S 50*50', 31200.0, TRUE);

-- NUEVO: MOISES HUELLITA L 90*90 = $56400
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES HUELLITA L 90*90', 56400.0, TRUE);

-- NUEVO: MOISES HUELLITA M 70*70 = $39300
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES HUELLITA M 70*70', 39300.0, TRUE);

-- NUEVO: MOISES HUELLITA S 50*50 = $32700
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES HUELLITA S 50*50', 32700.0, TRUE);

-- NUEVO: MOISES IGLU POLAR JUEGO X 3 = $57900
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES IGLU POLAR JUEGO X 3', 57900.0, TRUE);

-- NUEVO: MOISES JEANS C/ MICROFIBRA N°1 = $14950
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES JEANS C/ MICROFIBRA N°1', 14950.0, TRUE);

-- NUEVO: MOISES JEANS C/ MICROFIBRA N°2 = $16850
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES JEANS C/ MICROFIBRA N°2', 16850.0, TRUE);

-- NUEVO: MOISES JEANS C/ MICROFIBRA N°3 = $24500
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES JEANS C/ MICROFIBRA N°3', 24500.0, TRUE);

-- NUEVO: MOISES JEANS C/CORDERITO N°1 = $25500
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES JEANS C/CORDERITO N°1', 25500.0, TRUE);

-- NUEVO: MOISES JEANS C/CORDERITO N°2 = $31950
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES JEANS C/CORDERITO N°2', 31950.0, TRUE);

-- NUEVO: MOISES JEANS C/POLAR N°1 = $17750
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES JEANS C/POLAR N°1', 17750.0, TRUE);

-- NUEVO: MOISES JEANS C/POLAR N°2 = $21300
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES JEANS C/POLAR N°2', 21300.0, TRUE);

-- NUEVO: MOISES JEANS C/POLAR N°3 = $29750
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES JEANS C/POLAR N°3', 29750.0, TRUE);

-- NUEVO: MOISES NIDO REVERSIBLE 1 MT ESTRELLA = $28900
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES NIDO REVERSIBLE 1 MT ESTRELLA', 28900.0, TRUE);

-- NUEVO: MOISES NIDO REVERSIBLE 1 MT LISOS = $27800
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES NIDO REVERSIBLE 1 MT LISOS', 27800.0, TRUE);

-- NUEVO: MOISES NIDO REVERSIBLE 60 CM ESTRELLA = $19000
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES NIDO REVERSIBLE 60 CM ESTRELLA', 19000.0, TRUE);

-- NUEVO: MOISES NIDO REVERSIBLE 60 CM LISOS = $16800
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES NIDO REVERSIBLE 60 CM LISOS', 16800.0, TRUE);

-- NUEVO: MOISES NIDO REVERSIBLE 80 CM ESTRELLA = $23800
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES NIDO REVERSIBLE 80 CM ESTRELLA', 23800.0, TRUE);

-- NUEVO: MOISES NIDO REVERSIBLE 80 CM LISOS = $20500
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES NIDO REVERSIBLE 80 CM LISOS', 20500.0, TRUE);

-- NUEVO: MOISES NORDICO 50 CM = $24200
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES NORDICO 50 CM', 24200.0, TRUE);

-- NUEVO: MOISES NORDICO 70 CM = $29600
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES NORDICO 70 CM', 29600.0, TRUE);

-- NUEVO: MOISES REDONDO JACKY X3 = $26950
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES REDONDO JACKY X3', 26950.0, TRUE);

-- NUEVO: MOISES REDONDO POLAR VELLON 60 CM N°1 = $14600
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES REDONDO POLAR VELLON 60 CM N°1', 14600.0, TRUE);

-- NUEVO: MOISES REDONDO POLAR VELLON 80 CM N°2 = $21300
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES REDONDO POLAR VELLON 80 CM N°2', 21300.0, TRUE);

-- NUEVO: MOISES TORETTO N°1 70 CM = $31550
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES TORETTO N°1 70 CM', 31550.0, TRUE);

-- NUEVO: MOISES TORETTO N°2 90 CM = $36800
-- INSERT INTO productos (nombre, precio, activo) VALUES ('MOISES TORETTO N°2 90 CM', 36800.0, TRUE);

-- NUEVO: NEGRO SHAMPOO = $7050
-- INSERT INTO productos (nombre, precio, activo) VALUES ('NEGRO SHAMPOO', 7050.0, TRUE);

-- NUEVO: NEW PET 200 1 SALIDA = $9500
-- INSERT INTO productos (nombre, precio, activo) VALUES ('NEW PET 200 1 SALIDA', 9500.0, TRUE);

-- NUEVO: N° 0 20 CM FANTASIAS = $1600
-- INSERT INTO productos (nombre, precio, activo) VALUES ('N° 0 20 CM FANTASIAS', 1600.0, TRUE);

-- NUEVO: N° 0 20 CM LISAS = $1060
-- INSERT INTO productos (nombre, precio, activo) VALUES ('N° 0 20 CM LISAS', 1060.0, TRUE);

-- NUEVO: N° 1 25 CM = $1270
-- INSERT INTO productos (nombre, precio, activo) VALUES ('N° 1 25 CM', 1270.0, TRUE);

-- NUEVO: N° 10 70 CM = $3960
-- INSERT INTO productos (nombre, precio, activo) VALUES ('N° 10 70 CM', 3960.0, TRUE);

-- NUEVO: N° 2 30 CM = $1630
-- INSERT INTO productos (nombre, precio, activo) VALUES ('N° 2 30 CM', 1630.0, TRUE);

-- NUEVO: N° 3 35 CM = $1890
-- INSERT INTO productos (nombre, precio, activo) VALUES ('N° 3 35 CM', 1890.0, TRUE);

-- NUEVO: N° 4 40 CM = $2150
-- INSERT INTO productos (nombre, precio, activo) VALUES ('N° 4 40 CM', 2150.0, TRUE);

-- NUEVO: N° 5 45 CM = $2440
-- INSERT INTO productos (nombre, precio, activo) VALUES ('N° 5 45 CM', 2440.0, TRUE);

-- NUEVO: N° 6 50 CM = $2740
-- INSERT INTO productos (nombre, precio, activo) VALUES ('N° 6 50 CM', 2740.0, TRUE);

-- NUEVO: N° 7 55 CM = $3020
-- INSERT INTO productos (nombre, precio, activo) VALUES ('N° 7 55 CM', 3020.0, TRUE);

-- NUEVO: N° 8 60 CM = $3350
-- INSERT INTO productos (nombre, precio, activo) VALUES ('N° 8 60 CM', 3350.0, TRUE);

-- NUEVO: N° 9 65 CM = $3640
-- INSERT INTO productos (nombre, precio, activo) VALUES ('N° 9 65 CM', 3640.0, TRUE);

-- NUEVO: N°1 21X14X11 3MM = $5600
-- INSERT INTO productos (nombre, precio, activo) VALUES ('N°1 21X14X11 3MM', 5600.0, TRUE);

-- NUEVO: N°1 8X15X17 3MM = $6450
-- INSERT INTO productos (nombre, precio, activo) VALUES ('N°1 8X15X17 3MM', 6450.0, TRUE);

-- NUEVO: N°11 75 CM = $4260
-- INSERT INTO productos (nombre, precio, activo) VALUES ('N°11 75 CM', 4260.0, TRUE);

-- NUEVO: N°12 80 CM = $4690
-- INSERT INTO productos (nombre, precio, activo) VALUES ('N°12 80 CM', 4690.0, TRUE);

-- NUEVO: N°2 10X17X20 3MM = $7450
-- INSERT INTO productos (nombre, precio, activo) VALUES ('N°2 10X17X20 3MM', 7450.0, TRUE);

-- NUEVO: N°2 27X16X13 3MM = $6450
-- INSERT INTO productos (nombre, precio, activo) VALUES ('N°2 27X16X13 3MM', 6450.0, TRUE);

-- NUEVO: N°3 11X21X22 3MM = $8850
-- INSERT INTO productos (nombre, precio, activo) VALUES ('N°3 11X21X22 3MM', 8850.0, TRUE);

-- NUEVO: N°3 30X18X16 3MM = $7450
-- INSERT INTO productos (nombre, precio, activo) VALUES ('N°3 30X18X16 3MM', 7450.0, TRUE);

-- NUEVO: N°4 14X25X28 3MM = $11100
-- INSERT INTO productos (nombre, precio, activo) VALUES ('N°4 14X25X28 3MM', 11100.0, TRUE);

-- NUEVO: N°4 35X25X19 3MM = $10250
-- INSERT INTO productos (nombre, precio, activo) VALUES ('N°4 35X25X19 3MM', 10250.0, TRUE);

-- NUEVO: N°5 4MM = $12550
-- INSERT INTO productos (nombre, precio, activo) VALUES ('N°5 4MM', 12550.0, TRUE);

-- NUEVO: N°6 5MM = $20230
-- INSERT INTO productos (nombre, precio, activo) VALUES ('N°6 5MM', 20230.0, TRUE);

-- NUEVO: N°7 6MM = $33380
-- INSERT INTO productos (nombre, precio, activo) VALUES ('N°7 6MM', 33380.0, TRUE);

-- NUEVO: PALO BOWLING GIGANTE = $2820
-- INSERT INTO productos (nombre, precio, activo) VALUES ('PALO BOWLING GIGANTE', 2820.0, TRUE);

-- NUEVO: PAPA FRITAS = $1850
-- INSERT INTO productos (nombre, precio, activo) VALUES ('PAPA FRITAS', 1850.0, TRUE);

-- NUEVO: PAÑOS LEBON PETS 60X48 10 UNIDADES = $8250
-- INSERT INTO productos (nombre, precio, activo) VALUES ('PAÑOS LEBON PETS 60X48 10 UNIDADES', 8250.0, TRUE);

-- NUEVO: PAÑOS LEBON PETS 60X60 10 UNIDADES = $9850
-- INSERT INTO productos (nombre, precio, activo) VALUES ('PAÑOS LEBON PETS 60X60 10 UNIDADES', 9850.0, TRUE);

-- NUEVO: PAÑOS LEBON PETS 60X90 10 UNIDADES = $11500
-- INSERT INTO productos (nombre, precio, activo) VALUES ('PAÑOS LEBON PETS 60X90 10 UNIDADES', 11500.0, TRUE);

-- NUEVO: PAÑOS PET MAX X 10 UNIDADES = $11200
-- INSERT INTO productos (nombre, precio, activo) VALUES ('PAÑOS PET MAX X 10 UNIDADES', 11200.0, TRUE);

-- NUEVO: PAÑOS PET MAX X 5 UNIDADES = $6000
-- INSERT INTO productos (nombre, precio, activo) VALUES ('PAÑOS PET MAX X 5 UNIDADES', 6000.0, TRUE);

-- NUEVO: PAÑOS PET MINI X 10 UNIDADES = $7700
-- INSERT INTO productos (nombre, precio, activo) VALUES ('PAÑOS PET MINI X 10 UNIDADES', 7700.0, TRUE);

-- NUEVO: PAÑOS PET MINI X 5 UNIDADES = $4200
-- INSERT INTO productos (nombre, precio, activo) VALUES ('PAÑOS PET MINI X 5 UNIDADES', 4200.0, TRUE);

-- NUEVO: PECHERA IMPORTADA ACOLCHADA L = $8100
-- INSERT INTO productos (nombre, precio, activo) VALUES ('PECHERA IMPORTADA ACOLCHADA L', 8100.0, TRUE);

-- NUEVO: PECHERA IMPORTADA ACOLCHADA M = $7820
-- INSERT INTO productos (nombre, precio, activo) VALUES ('PECHERA IMPORTADA ACOLCHADA M', 7820.0, TRUE);

-- NUEVO: PECHERA IMPORTADA ACOLCHADA S = $7680
-- INSERT INTO productos (nombre, precio, activo) VALUES ('PECHERA IMPORTADA ACOLCHADA S', 7680.0, TRUE);

-- NUEVO: PECHERA IMPORTADA ACOLCHADA XL = $8400
-- INSERT INTO productos (nombre, precio, activo) VALUES ('PECHERA IMPORTADA ACOLCHADA XL', 8400.0, TRUE);

-- NUEVO: PECHERA IMPORTADA ACOLCHADA XXL = $9100
-- INSERT INTO productos (nombre, precio, activo) VALUES ('PECHERA IMPORTADA ACOLCHADA XXL', 9100.0, TRUE);

-- NUEVO: PECHERAS C/ MOCHILA M = $4750
-- INSERT INTO productos (nombre, precio, activo) VALUES ('PECHERAS C/ MOCHILA M', 4750.0, TRUE);

-- NUEVO: PEINE METAL 16,5 CM = $1950
-- INSERT INTO productos (nombre, precio, activo) VALUES ('PEINE METAL 16,5 CM', 1950.0, TRUE);

-- NUEVO: PELOTA C/ MOVIMIENTO CON COLA ( USB) = $3400
-- INSERT INTO productos (nombre, precio, activo) VALUES ('PELOTA C/ MOVIMIENTO CON COLA ( USB)', 3400.0, TRUE);

-- NUEVO: PELOTA CON CARAS = $2820
-- INSERT INTO productos (nombre, precio, activo) VALUES ('PELOTA CON CARAS', 2820.0, TRUE);

-- NUEVO: PELOTA CON PINCHE Y LUZ X 12 10 CM ( CAJA ) = $33400
-- INSERT INTO productos (nombre, precio, activo) VALUES ('PELOTA CON PINCHE Y LUZ X 12 10 CM ( CAJA )', 33400.0, TRUE);

-- NUEVO: PELOTA CON PINCHE Y LUZ X 12 6,5 CM = $15900
-- INSERT INTO productos (nombre, precio, activo) VALUES ('PELOTA CON PINCHE Y LUZ X 12 6,5 CM', 15900.0, TRUE);

-- NUEVO: PELOTA CON PINCHE Y LUZ X 12 8 CM ( CAJA ) = $23500
-- INSERT INTO productos (nombre, precio, activo) VALUES ('PELOTA CON PINCHE Y LUZ X 12 8 CM ( CAJA )', 23500.0, TRUE);

-- NUEVO: PELOTA FIGURA GIGANTE CHIFLE = $8750
-- INSERT INTO productos (nombre, precio, activo) VALUES ('PELOTA FIGURA GIGANTE CHIFLE', 8750.0, TRUE);

-- NUEVO: PELOTA SEMI RIGIDA X 12 8 CM ( CAJA ) = $19500
-- INSERT INTO productos (nombre, precio, activo) VALUES ('PELOTA SEMI RIGIDA X 12 8 CM ( CAJA )', 19500.0, TRUE);

-- NUEVO: PILLOW CHICO 75*70 = $9200
-- INSERT INTO productos (nombre, precio, activo) VALUES ('PILLOW CHICO 75*70', 9200.0, TRUE);

-- NUEVO: PILLOW MEDIANO 70*95 = $14500
-- INSERT INTO productos (nombre, precio, activo) VALUES ('PILLOW MEDIANO 70*95', 14500.0, TRUE);

-- NUEVO: PULVERIZADOR 1000CC ECONOMICO = $1530
-- INSERT INTO productos (nombre, precio, activo) VALUES ('PULVERIZADOR 1000CC ECONOMICO', 1530.0, TRUE);

-- NUEVO: RASCADOR CASA CHALET = $35000
-- INSERT INTO productos (nombre, precio, activo) VALUES ('RASCADOR CASA CHALET', 35000.0, TRUE);

-- NUEVO: RASCADOR CASA DOBLE ENTRADA = $32000
-- INSERT INTO productos (nombre, precio, activo) VALUES ('RASCADOR CASA DOBLE ENTRADA', 32000.0, TRUE);

-- NUEVO: RASCADOR CASA RECTANGULAR = $32000
-- INSERT INTO productos (nombre, precio, activo) VALUES ('RASCADOR CASA RECTANGULAR', 32000.0, TRUE);

-- NUEVO: RASCADOR GATO BREAK MADERA = $18600
-- INSERT INTO productos (nombre, precio, activo) VALUES ('RASCADOR GATO BREAK MADERA', 18600.0, TRUE);

-- NUEVO: RASCADOR GATO ENJOY MADERA = $13800
-- INSERT INTO productos (nombre, precio, activo) VALUES ('RASCADOR GATO ENJOY MADERA', 13800.0, TRUE);

-- NUEVO: RASCADOR GATO GOUT MADERA = $26800
-- INSERT INTO productos (nombre, precio, activo) VALUES ('RASCADOR GATO GOUT MADERA', 26800.0, TRUE);

-- NUEVO: RASCADOR GATO GRUYERE MADERA = $21800
-- INSERT INTO productos (nombre, precio, activo) VALUES ('RASCADOR GATO GRUYERE MADERA', 21800.0, TRUE);

-- NUEVO: RASCADOR GATO LAND MADERA = $13800
-- INSERT INTO productos (nombre, precio, activo) VALUES ('RASCADOR GATO LAND MADERA', 13800.0, TRUE);

-- NUEVO: RASCADOR GATO NOMIS MADERA = $18600
-- INSERT INTO productos (nombre, precio, activo) VALUES ('RASCADOR GATO NOMIS MADERA', 18600.0, TRUE);

-- NUEVO: RASCADOR GATO SIMON MADERA = $9700
-- INSERT INTO productos (nombre, precio, activo) VALUES ('RASCADOR GATO SIMON MADERA', 9700.0, TRUE);

-- NUEVO: RASCADOR PLATAFORMA = $22400
-- INSERT INTO productos (nombre, precio, activo) VALUES ('RASCADOR PLATAFORMA', 22400.0, TRUE);

-- NUEVO: RASCADOR SILLA = $29600
-- INSERT INTO productos (nombre, precio, activo) VALUES ('RASCADOR SILLA', 29600.0, TRUE);

-- NUEVO: RASCADOR SILLON = $36000
-- INSERT INTO productos (nombre, precio, activo) VALUES ('RASCADOR SILLON', 36000.0, TRUE);

-- NUEVO: RECOLECTOR D/EXCREMENTO EN PIEDRAS O ARENA = $8400
-- INSERT INTO productos (nombre, precio, activo) VALUES ('RECOLECTOR D/EXCREMENTO EN PIEDRAS O ARENA', 8400.0, TRUE);

-- NUEVO: REGADERA PLASTICO 10 LTS = $12400
-- INSERT INTO productos (nombre, precio, activo) VALUES ('REGADERA PLASTICO 10 LTS', 12400.0, TRUE);

-- NUEVO: REPUESTO BOLSITA HIGIENICA X 5 = $1500
-- INSERT INTO productos (nombre, precio, activo) VALUES ('REPUESTO BOLSITA HIGIENICA X 5', 1500.0, TRUE);

-- NUEVO: ROLLO X 50 MTS EN CAJA = $18400
-- INSERT INTO productos (nombre, precio, activo) VALUES ('ROLLO X 50 MTS EN CAJA', 18400.0, TRUE);

-- NUEVO: RS 062 A 300 LTS/H = $11800
-- INSERT INTO productos (nombre, precio, activo) VALUES ('RS 062 A 300 LTS/H', 11800.0, TRUE);

-- NUEVO: RS 082 A 450 LTS/H = $16600
-- INSERT INTO productos (nombre, precio, activo) VALUES ('RS 082 A 450 LTS/H', 16600.0, TRUE);

-- NUEVO: RS 390 2 SALIDAS = $11150
-- INSERT INTO productos (nombre, precio, activo) VALUES ('RS 390 2 SALIDAS', 11150.0, TRUE);

-- NUEVO: SACA HOJAS P/PILETA PLANO = $3550
-- INSERT INTO productos (nombre, precio, activo) VALUES ('SACA HOJAS P/PILETA PLANO', 3550.0, TRUE);

-- NUEVO: SHULET CARASSIUS 10 GR = $1800
-- INSERT INTO productos (nombre, precio, activo) VALUES ('SHULET CARASSIUS 10 GR', 1800.0, TRUE);

-- NUEVO: SHULET CARASSIUS 2.250 GR = $115200
-- INSERT INTO productos (nombre, precio, activo) VALUES ('SHULET CARASSIUS 2.250 GR', 115200.0, TRUE);

-- NUEVO: SHULET CARASSIUS 20 GR = $3120
-- INSERT INTO productos (nombre, precio, activo) VALUES ('SHULET CARASSIUS 20 GR', 3120.0, TRUE);

-- NUEVO: SHULET CARASSIUS 40 GR = $5700
-- INSERT INTO productos (nombre, precio, activo) VALUES ('SHULET CARASSIUS 40 GR', 5700.0, TRUE);

-- NUEVO: SOGA CON MORDILLO FORMA S = $1550
-- INSERT INTO productos (nombre, precio, activo) VALUES ('SOGA CON MORDILLO FORMA S', 1550.0, TRUE);

-- NUEVO: STICK CON FORMAS = $2820
-- INSERT INTO productos (nombre, precio, activo) VALUES ('STICK CON FORMAS', 2820.0, TRUE);

-- NUEVO: TA MACETA JARDINERA MINI N°20 = $1150
-- INSERT INTO productos (nombre, precio, activo) VALUES ('TA MACETA JARDINERA MINI N°20', 1150.0, TRUE);

-- NUEVO: TA MACETA JARDINERA MINI N°20 OVAL = $1350
-- INSERT INTO productos (nombre, precio, activo) VALUES ('TA MACETA JARDINERA MINI N°20 OVAL', 1350.0, TRUE);

-- NUEVO: TA MACETA JARDINERA MINI N°36 = $2100
-- INSERT INTO productos (nombre, precio, activo) VALUES ('TA MACETA JARDINERA MINI N°36', 2100.0, TRUE);

-- NUEVO: TANZAS CUADRADA DE 1.5 - 2.0 -2.5 -3.0 MM = $19900
-- INSERT INTO productos (nombre, precio, activo) VALUES ('TANZAS CUADRADA DE 1.5 - 2.0 -2.5 -3.0 MM', 19900.0, TRUE);

-- NUEVO: TANZAS REDONDA DE 1.5 - 2.0 -2.5 -3.0 MM = $19900
-- INSERT INTO productos (nombre, precio, activo) VALUES ('TANZAS REDONDA DE 1.5 - 2.0 -2.5 -3.0 MM', 19900.0, TRUE);

-- NUEVO: TRADICIONAL 5 LTS = $68970
-- INSERT INTO productos (nombre, precio, activo) VALUES ('TRADICIONAL 5 LTS', 68970.0, TRUE);

-- NUEVO: TRADICIONAL SHAMPOO 250CC = $6870
-- INSERT INTO productos (nombre, precio, activo) VALUES ('TRADICIONAL SHAMPOO 250CC', 6870.0, TRUE);

-- NUEVO: TRAMPA LAUCHA MADERA ECONOMICA = $1000
-- INSERT INTO productos (nombre, precio, activo) VALUES ('TRAMPA LAUCHA MADERA ECONOMICA', 1000.0, TRUE);

-- NUEVO: TRAMPA RATA MADERA = $2700
-- INSERT INTO productos (nombre, precio, activo) VALUES ('TRAMPA RATA MADERA', 2700.0, TRUE);

-- NUEVO: TRAMPA RATA MADERA ECONOMICA = $2000
-- INSERT INTO productos (nombre, precio, activo) VALUES ('TRAMPA RATA MADERA ECONOMICA', 2000.0, TRUE);

-- NUEVO: TRANSPORTADORA NACIONAL N2 46*30*30 P/METAL = $26950
-- INSERT INTO productos (nombre, precio, activo) VALUES ('TRANSPORTADORA NACIONAL N2 46*30*30 P/METAL', 26950.0, TRUE);

-- NUEVO: TRANSPORTADORA NACIONAL N2 46*30*30 P/PLASTICO = $23100
-- INSERT INTO productos (nombre, precio, activo) VALUES ('TRANSPORTADORA NACIONAL N2 46*30*30 P/PLASTICO', 23100.0, TRUE);

-- NUEVO: TRANSPORTADORA NACIONAL N3 58*39*39 P/METAL = $41200
-- INSERT INTO productos (nombre, precio, activo) VALUES ('TRANSPORTADORA NACIONAL N3 58*39*39 P/METAL', 41200.0, TRUE);

-- NUEVO: TRANSPORTADORA NACIONAL N3 58*39*39 P/PLASTICO = $34600
-- INSERT INTO productos (nombre, precio, activo) VALUES ('TRANSPORTADORA NACIONAL N3 58*39*39 P/PLASTICO', 34600.0, TRUE);

-- NUEVO: TUTORES CHICOS X 25 = $7300
-- INSERT INTO productos (nombre, precio, activo) VALUES ('TUTORES CHICOS X 25', 7300.0, TRUE);

-- NUEVO: UNIVERSAL PELLETS FLOTE 1 KGR = $8500
-- INSERT INTO productos (nombre, precio, activo) VALUES ('UNIVERSAL PELLETS FLOTE 1 KGR', 8500.0, TRUE);

-- NUEVO: VELOXAN 1 LT = $40200
-- INSERT INTO productos (nombre, precio, activo) VALUES ('VELOXAN 1 LT', 40200.0, TRUE);


-- ============================================================
-- PARTE 3: Productos en Excel pero sin match en PDF (231)
-- Revisar manualmente si dieron de baja o cambiaron de nombre
-- ============================================================

-- SIN MATCH: 40X30X20  3MM (precio anterior: $10500)
-- SIN MATCH: 50X35X20  4MM (precio anterior: $18500)
-- SIN MATCH: 60X35X20  4MM (precio anterior: $20800)
-- SIN MATCH: 70X35X20  4MM (precio anterior: $23900)
-- SIN MATCH: 80X35X20  5 MM (precio anterior: $27000)
-- SIN MATCH: 90X35X20  6MM (precio anterior: $41650)
-- SIN MATCH: ADORNO MOVIMIENTO GRANDE (precio anterior: $4860)
-- SIN MATCH: ANILLOS PLASTICOS X 100 (precio anterior: $1400)
-- SIN MATCH: ARNES REGULABLE  L (precio anterior: $5900)
-- SIN MATCH: ARNES REGULABLE  M (precio anterior: $5250)
-- SIN MATCH: ARNES REGULABLE  S (precio anterior: $4800)
-- SIN MATCH: ARNES REGULABLE  XL (precio anterior: $6350)
-- SIN MATCH: ARNES REGULABLE  XS (precio anterior: $4450)
-- SIN MATCH: BEBEDEROS  POLLOS 3 LITROS (precio anterior: $4800)
-- SIN MATCH: BLANCO (precio anterior: $62400)
-- SIN MATCH: BLISTER COLLAR PARA GATOS X 12 U  LUMINOSO (precio anterior: $10200)
-- SIN MATCH: BOLSAS PECES X 100 (precio anterior: $6900)
-- SIN MATCH: BOLSO JACKY IMPERMEABLE GRANDE (precio anterior: $12500)
-- SIN MATCH: BOLSO TRANPORTADOR NACIONAL CHICO (precio anterior: $19200)
-- SIN MATCH: BOLSO TRANPORTADOR NACIONAL GRANDE (precio anterior: $23100)
-- SIN MATCH: BOMBA RS 023 (precio anterior: $36950)
-- SIN MATCH: BOMBA RS 952 2500 L/H  2,5 MT (precio anterior: $35550)
-- SIN MATCH: CACHORROS (precio anterior: $5850)
-- SIN MATCH: CADENA PASEO N1   2 MM (precio anterior: $1180)
-- SIN MATCH: CADENA PASEO N2    2,5 MM (precio anterior: $1560)
-- SIN MATCH: CADENA PASEO N3   3 MM (precio anterior: $1850)
-- SIN MATCH: CADENA PASEO N4   3,5 MM (precio anterior: $2250)
-- SIN MATCH: CADENA PASEO N5   4 MM (precio anterior: $2550)
-- SIN MATCH: CAJA X 20 UNID (precio anterior: $153600)
-- SIN MATCH: CAMA PALTA  M   70*70 (precio anterior: $38100)
-- SIN MATCH: CAPXAN F  CAPSULAS X 15 U (precio anterior: $9450)
-- SIN MATCH: CAPXAN I  CAPSULAS X 15 U (precio anterior: $9000)
-- SIN MATCH: CARDINA MADERA  GRANDE (precio anterior: $2380)
-- SIN MATCH: CAZUELA PISO 2 (precio anterior: $270)
-- SIN MATCH: CEPILLO DOBLE MEDIANO  PLASTICO (precio anterior: $2100)
-- SIN MATCH: CERCO PLASTICO  SIMIL PIEDRA 60 CM (precio anterior: $1600)
-- SIN MATCH: COBERTOR M   90*90 (precio anterior: $27300)
-- SIN MATCH: COBERTOR XL  90*120 (precio anterior: $37800)
-- SIN MATCH: COLCHONETA FINA GUATA-MICRO 45*55 N1 (precio anterior: $3900)
-- SIN MATCH: COLCHONETA FINA GUATA-MICRO 50*65 N2 (precio anterior: $4600)
-- SIN MATCH: COLCHONETA FINA GUATA-MICRO 60*80 N3 (precio anterior: $6200)
-- SIN MATCH: COLCHONETA FINA GUATA-MICRO 70*90 N4 (precio anterior: $7980)
-- SIN MATCH: COLCHONETA FINA GUATA-MICRO 90*90 N5 (precio anterior: $9800)
-- SIN MATCH: COLCHONETA REDONDA  POLAR (precio anterior: $14250)
-- SIN MATCH: COLCHONETA REDONDA REFORZADA (precio anterior: $10700)
-- SIN MATCH: COLCHONETA TRANSPORTABLE  50 X 60  N1 (precio anterior: $5970)
-- SIN MATCH: COLCHONETA TRANSPORTABLE  70 X 75  N2 (precio anterior: $10950)
-- SIN MATCH: COLLAR 2,5 MM   4 HUESOS (precio anterior: $3580)
-- SIN MATCH: COLLAR CON FLOR X6 (precio anterior: $1950)
-- SIN MATCH: COLLAR GATOS ANIMAL PRINT  X4 (precio anterior: $3330)
-- SIN MATCH: COLLAR GATOS FOSFORECENTE  X4 (precio anterior: $3330)
-- SIN MATCH: COLLAR GATOS LUMINOSO  X4 (precio anterior: $3330)
-- SIN MATCH: COLLAR NATO 40MM   55 CM (precio anterior: $2950)
-- SIN MATCH: COLLAR NATO 40MM   65 CM (precio anterior: $3250)
-- SIN MATCH: COLLAR NATO 40MM   70 CM (precio anterior: $3350)
-- SIN MATCH: COLLAR PULGUICIDAS BABS CACHORROS (precio anterior: $5930)
-- SIN MATCH: COLLAR PULGUICIDAS BABS GATOS (precio anterior: $6820)
-- SIN MATCH: COLLAR PULGUICIDAS BABS GRANDES (precio anterior: $7450)
-- SIN MATCH: COLLAR PULGUICIDAS BABS MEDIANO (precio anterior: $6530)
-- SIN MATCH: COMEDERO ACERO  CAZUELA GDE (precio anterior: $8500)
-- SIN MATCH: COMEDERO ACERO DOBLE  CHICO (precio anterior: $6200)
-- SIN MATCH: COMEDERO ACERO DOBLE  GDE (precio anterior: $7700)
-- SIN MATCH: COMEDERO CAZUELA  DOBLE CON BASE MADERA 34*17*10 (precio anterior: $14000)
-- SIN MATCH: COMEDERO DOBLE CHICO  PARA GATO (precio anterior: $940)
-- SIN MATCH: CORREA LISA N° 3   2 MTS (precio anterior: $2850)
-- SIN MATCH: CORREA LISA N° 3   3 MTS (precio anterior: $3550)
-- SIN MATCH: CORREA LISA N° 3   5 MTS (precio anterior: $4450)
-- SIN MATCH: CORREA LISA N° 4   2 MTS (precio anterior: $3150)
-- SIN MATCH: CORREA LISA N° 4   3 MTS (precio anterior: $3950)
-- SIN MATCH: CORREA LISA N° 4   5 MTS (precio anterior: $5050)
-- SIN MATCH: CUCARACHISIDA AEROSOL  ESCUDO (precio anterior: $3150)
-- SIN MATCH: CUCARACHISIDA EN POLVO X  50 SOBRES (precio anterior: $14500)
-- SIN MATCH: CURABICHERA  CURABIGEN (precio anterior: $5900)
-- SIN MATCH: DOG OUT LIQ X 500 CC (precio anterior: $5680)
-- SIN MATCH: ESPUMA EN SECO BABS (precio anterior: $5950)
-- SIN MATCH: EXAGONAL N° 5  18X29X35  4MM (precio anterior: $13100)
-- SIN MATCH: FERTTIFOX FOLLAJE  1 LT (precio anterior: $12180)
-- SIN MATCH: GRANZA COLOR 500 GRS (precio anterior: $1700)
-- SIN MATCH: GRANZA COLOR VARIADOS 500 GRS (precio anterior: $1700)
-- SIN MATCH: HAMSTERA CON TAPA  3MM (precio anterior: $12350)
-- SIN MATCH: HIERBA GATERA  OSO CON RESORTE (precio anterior: $2400)
-- SIN MATCH: HIPOALARGENICO (precio anterior: $5850)
-- SIN MATCH: HORMONA  LIQ 75CC (precio anterior: $6420)
-- SIN MATCH: INSECTICIDA  GORRION 500 CC (precio anterior: $5140)
-- SIN MATCH: INSECTICIDA  TRIUNFO 500 CC (precio anterior: $4170)
-- SIN MATCH: JUGUETES  PELUCHES SURTIDOS ( 10+1) (precio anterior: $1200)
-- SIN MATCH: JUMPER JUMBO TPR (precio anterior: $4890)
-- SIN MATCH: LENGUETERO LARGO X 100 (precio anterior: $65)
-- SIN MATCH: LINEAL 5 CM  X2 (precio anterior: $4790)
-- SIN MATCH: LITERA CERRADA N°1 51*37*36 (precio anterior: $20200)
-- SIN MATCH: LOCION  X 1 LITRO (precio anterior: $34500)
-- SIN MATCH: LUZ LED  KTM 638 12W (precio anterior: $17400)
-- SIN MATCH: MACETA  COMUN N° 10 (precio anterior: $190)
-- SIN MATCH: MACETA  COMUN N° 6 (precio anterior: $90)
-- SIN MATCH: MACETA  COMUN N° 8 (precio anterior: $170)
-- SIN MATCH: MACETA BOLS N 18 C/GANCHO  (MARRON) (precio anterior: $580)
-- SIN MATCH: MACETA CERAMICA FRIDA GDE (precio anterior: $7450)
-- SIN MATCH: MACETA CERAMICA PANDA GDE (precio anterior: $6950)
-- SIN MATCH: MACETA CERAMICA PERRO CH (precio anterior: $3300)
-- SIN MATCH: MACETA CERAMICA TORTUGA GDE (precio anterior: $5400)
-- SIN MATCH: MACETA CERAMICA UNICORNIO GDE (precio anterior: $7450)
-- SIN MATCH: MACETA MIMBRE N 19 (precio anterior: $1210)
-- SIN MATCH: MACETA PIRAMIDAL  N° 10 (precio anterior: $230)
-- SIN MATCH: MACETA PIRAMIDAL  N° 12 (precio anterior: $370)
-- SIN MATCH: MACETA PIRAMIDAL  N° 6 (precio anterior: $110)
-- SIN MATCH: MACETA PIRAMIDAL  N° 8 (precio anterior: $190)
-- SIN MATCH: MANTA PARA LAMER  CUADRADA 20*20 (precio anterior: $3600)
-- SIN MATCH: MEDIANOS  IMPORTADO (precio anterior: $10800)
-- SIN MATCH: MIX FRUTAL (precio anterior: $48850)
-- SIN MATCH: MOCHILA CANGURO  L (precio anterior: $16500)
-- SIN MATCH: MOCHILA CANGURO  M (precio anterior: $16300)
-- SIN MATCH: MOCHILA CANGURO  XL (precio anterior: $16700)
-- SIN MATCH: MOCHILA TRANSPORTADORA P/ GATOS (precio anterior: $22000)
-- SIN MATCH: MOISES  BALLENA M  70*70 (precio anterior: $40100)
-- SIN MATCH: MOISES  BALLENA S  50*50 (precio anterior: $33300)
-- SIN MATCH: MOISES  GATITO M   7*70 (precio anterior: $37200)
-- SIN MATCH: MOISES  GATITO S   50*50 (precio anterior: $31200)
-- SIN MATCH: MOISES  HUELLITA  L   90*90 (precio anterior: $56400)
-- SIN MATCH: MOISES  HUELLITA  M   70*70 (precio anterior: $39300)
-- SIN MATCH: MOISES  HUELLITA  S   50*50 (precio anterior: $32700)
-- SIN MATCH: MOISES BRUSELAS  N° 1  70 CM (precio anterior: $31550)
-- SIN MATCH: MOISES BRUSELAS  N° 2  90 CM (precio anterior: $36800)
-- SIN MATCH: MOISES GARRITA   L  90*90 (precio anterior: $56400)
-- SIN MATCH: MOISES GARRITA   M  70*70 (precio anterior: $39300)
-- SIN MATCH: MOISES GARRITA   S   50*50 (precio anterior: $32700)
-- SIN MATCH: MOISES JEANS  C/CORDERITO N°1 (precio anterior: $19100)
-- SIN MATCH: MOISES JEANS  C/CORDERITO N°2 (precio anterior: $23700)
-- SIN MATCH: MOISES JEANS  C/POLAR N°1 (precio anterior: $13750)
-- SIN MATCH: MOISES JEANS  C/POLAR N°2 (precio anterior: $16450)
-- SIN MATCH: MOISES JEANS  C/POLAR N°3 (precio anterior: $23000)
-- SIN MATCH: MOISES JEANS C/  MICROFIBRA N°1 (precio anterior: $11950)
-- SIN MATCH: MOISES JEANS C/  MICROFIBRA N°2 (precio anterior: $13500)
-- SIN MATCH: MOISES JEANS C/  MICROFIBRA N°3 (precio anterior: $20500)
-- SIN MATCH: MOISES NIDO REVERSIBLE   60 CM   LISOS (precio anterior: $14700)
-- SIN MATCH: MOISES NIDO REVERSIBLE   60 CM  ESTRELLA (precio anterior: $16200)
-- SIN MATCH: MOISES NIDO REVERSIBLE   80 CM   LISOS (precio anterior: $17400)
-- SIN MATCH: MOISES NIDO REVERSIBLE   80 CM  ESTRELLA (precio anterior: $19400)
-- SIN MATCH: MOISES NIDO REVERSIBLE  1 MT      LISOS (precio anterior: $22350)
-- SIN MATCH: MOISES NIDO REVERSIBLE  1 MT     ESTRELLA (precio anterior: $24850)
-- SIN MATCH: MOISES NORDICO  50 CM (precio anterior: $23800)
-- SIN MATCH: MOISES NORDICO  70 CM (precio anterior: $27800)
-- SIN MATCH: MOISES REDONDO POLAR VELLON  50 CM   N°1 (precio anterior: $14600)
-- SIN MATCH: MOISES REDONDO POLAR VELLON  80 CM   N°2 (precio anterior: $21300)
-- SIN MATCH: MOISES TORETTO N°1  70 CM (precio anterior: $31550)
-- SIN MATCH: MOISES TORETTO N°2  90 CM (precio anterior: $36800)
-- SIN MATCH: NEGRO (precio anterior: $6390)
-- SIN MATCH: NEW PET 200  1 SALIDA (precio anterior: $9500)
-- SIN MATCH: N° 0   20 CM (precio anterior: $1060)
-- SIN MATCH: N° 1   25 CM (precio anterior: $1270)
-- SIN MATCH: N° 10  70 CM (precio anterior: $3960)
-- SIN MATCH: N° 2   30 CM (precio anterior: $1630)
-- SIN MATCH: N° 3   35 CM (precio anterior: $1890)
-- SIN MATCH: N° 4   40 CM (precio anterior: $2150)
-- SIN MATCH: N° 5   45 CM (precio anterior: $2440)
-- SIN MATCH: N° 6  50 CM (precio anterior: $2740)
-- SIN MATCH: N° 7   55 CM (precio anterior: $3020)
-- SIN MATCH: N° 8   60 CM (precio anterior: $3350)
-- SIN MATCH: N° 9   65 CM (precio anterior: $3640)
-- SIN MATCH: N°1  21X14X11  3MM (precio anterior: $4600)
-- SIN MATCH: N°1  8X15X17  3MM (precio anterior: $5400)
-- SIN MATCH: N°11  75 CM (precio anterior: $4260)
-- SIN MATCH: N°12  80 CM (precio anterior: $4690)
-- SIN MATCH: N°2  10X17X20  3MM (precio anterior: $6200)
-- SIN MATCH: N°2  27X16X13  3MM (precio anterior: $5400)
-- SIN MATCH: N°3  11X21X22  3MM (precio anterior: $7250)
-- SIN MATCH: N°3  30X18X16  3MM (precio anterior: $6200)
-- SIN MATCH: N°4  14X25X28  3MM (precio anterior: $9250)
-- SIN MATCH: N°4  35X25X19  3MM (precio anterior: $8500)
-- SIN MATCH: N°5  4MM (precio anterior: $10500)
-- SIN MATCH: N°6  5MM (precio anterior: $17000)
-- SIN MATCH: N°7  6MM (precio anterior: $27800)
-- SIN MATCH: PAÑOS LEBON PETS 60X48   10 UNIDADES (precio anterior: $8250)
-- SIN MATCH: PAÑOS LEBON PETS 60X60   10 UNIDADES (precio anterior: $9850)
-- SIN MATCH: PAÑOS LEBON PETS 60X90   10 UNIDADES (precio anterior: $11500)
-- SIN MATCH: PAÑOS PET  MAX X 10 UNIDADES (precio anterior: $11200)
-- SIN MATCH: PAÑOS PET  MAX X 5 UNIDADES (precio anterior: $6000)
-- SIN MATCH: PAÑOS PET  MINI X 10 UNIDADES (precio anterior: $7700)
-- SIN MATCH: PAÑOS PET  MINI X 5 UNIDADES (precio anterior: $4200)
-- SIN MATCH: PECHERA IMPORTADA  ACOLCHADA  L (precio anterior: $8100)
-- SIN MATCH: PECHERA IMPORTADA  ACOLCHADA  M (precio anterior: $7820)
-- SIN MATCH: PECHERA IMPORTADA  ACOLCHADA  S (precio anterior: $7680)
-- SIN MATCH: PECHERA IMPORTADA  ACOLCHADA  XL (precio anterior: $8400)
-- SIN MATCH: PECHERA IMPORTADA  ACOLCHADA  XXL (precio anterior: $9100)
-- SIN MATCH: PECHERAS C/ MOCHILA  M (precio anterior: $4750)
-- SIN MATCH: PEINE METAL  16,5 CM (precio anterior: $1950)
-- SIN MATCH: PELOTA  CON CARAS (precio anterior: $2520)
-- SIN MATCH: PELOTA  CON PINCHE Y LUZ  X 12  6,5 CM (precio anterior: $15000)
-- SIN MATCH: PELOTA  CON PINCHE Y LUZ  X 12  8 CM  ( CAJA ) (precio anterior: $23500)
-- SIN MATCH: PELOTA GATITO CON CASCABEL X2 (precio anterior: $1500)
-- SIN MATCH: PELOTA GATO X 2 (precio anterior: $1500)
-- SIN MATCH: PILLOW CHICO  75*70 (precio anterior: $9200)
-- SIN MATCH: PILLOW MEDIANO  70*95 (precio anterior: $14500)
-- SIN MATCH: PULVERIZADOR 1000CC  ECONOMICO (precio anterior: $1530)
-- SIN MATCH: RASCADOR ESCUADRA (precio anterior: $10100)
-- SIN MATCH: RASCADOR GATO BREAK  MADERA (precio anterior: $16940)
-- SIN MATCH: RASCADOR GATO ENJOY  MADERA (precio anterior: $12540)
-- SIN MATCH: RASCADOR GATO GOUT  MADERA (precio anterior: $24420)
-- SIN MATCH: RASCADOR GATO GRUYERE  MADERA (precio anterior: $19800)
-- SIN MATCH: RASCADOR GATO LAND  MADERA (precio anterior: $12540)
-- SIN MATCH: RASCADOR GATO NOMIS  MADERA (precio anterior: $16940)
-- SIN MATCH: RASCADOR GATO SIMON  MADERA (precio anterior: $8800)
-- SIN MATCH: RECOLECTOR D/EXCREMENTO  EN PIEDRAS O ARENA (precio anterior: $7550)
-- SIN MATCH: REPUESTO BOLSITA  HIGIENICA X 5 (precio anterior: $1500)
-- SIN MATCH: ROLLO X 50 MTS   EN CAJA (precio anterior: $18400)
-- SIN MATCH: RS 062 A    300 LTS/H (precio anterior: $11800)
-- SIN MATCH: RS 082 A  450 LTS/H (precio anterior: $16600)
-- SIN MATCH: RS 390  2 SALIDAS (precio anterior: $11150)
-- SIN MATCH: SACA HOJAS  P/PILETA  PLANO (precio anterior: $3550)
-- SIN MATCH: SHULET CARASSIUS  10 GR (precio anterior: $1640)
-- SIN MATCH: SHULET CARASSIUS  2.250 GR (precio anterior: $104500)
-- SIN MATCH: SHULET CARASSIUS  20 GR (precio anterior: $2830)
-- SIN MATCH: SHULET CARASSIUS  40 GR (precio anterior: $5180)
-- SIN MATCH: SOGA CON MORDILLO FORMA  S (precio anterior: $1450)
-- SIN MATCH: SONAJERO CON BOLITAS (precio anterior: $950)
-- SIN MATCH: TA MACETA  JARDINERA MINI N°20 (precio anterior: $1130)
-- SIN MATCH: TA MACETA  JARDINERA MINI N°20 OVAL (precio anterior: $1130)
-- SIN MATCH: TA MACETA  JARDINERA MINI N°36 (precio anterior: $1875)
-- SIN MATCH: TANZAS CUADRADA DE 1.5 - 2.0  -2.5  -3.0 MM (precio anterior: $19900)
-- SIN MATCH: TANZAS REDONDA DE 1.5 - 2.0  -2.5  -3.0 MM (precio anterior: $19900)
-- SIN MATCH: TRADICIONAL (precio anterior: $62500)
-- SIN MATCH: TRAMPA LAUCHA  MADERA (precio anterior: $1500)
-- SIN MATCH: TRAMPA LAUCHA  MADERA ECONOMICA (precio anterior: $910)
-- SIN MATCH: TRAMPA RATA  MADERA (precio anterior: $2700)
-- SIN MATCH: TRAMPA RATA  MADERA ECONOMICA (precio anterior: $1650)
-- SIN MATCH: TRANSPORTADORA NACIONAL  N2  46*30*30 P/METAL (precio anterior: $23200)
-- SIN MATCH: TRANSPORTADORA NACIONAL  N2  46*30*30 P/PLASTICO (precio anterior: $21300)
-- SIN MATCH: TRANSPORTADORA NACIONAL  N3  58*39*39 P/METAL (precio anterior: $35500)
-- SIN MATCH: TRANSPORTADORA NACIONAL  N3  58*39*39 P/PLASTICO (precio anterior: $33900)
-- SIN MATCH: TUTORES  CHICOS X 25 (precio anterior: $4500)
-- SIN MATCH: UNIVERSAL PELLETS FLOTE  1 KGR (precio anterior: $8500)
-- SIN MATCH: VELOXAN  1 LT (precio anterior: $37550)

-- ============================================================
-- RESUMEN ESTADÍSTICO
-- ============================================================
-- Total en PDF nuevo:       1127
-- Precios que subieron:      465
-- Precios que bajaron:       7
-- Sin cambio de precio:      408
-- Productos nuevos:          247
-- Sin match en PDF:          231
-- Aumento promedio:         +14.4%
-- Aumento máximo:           +345.5% (TUTORES GRANDES)