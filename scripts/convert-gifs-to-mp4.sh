#!/bin/bash

# Script pour convertir les gros GIFs en MP4

echo "🎬 Converting large GIFs to MP4..."
echo ""

# Liste des GIFs à convertir
GIFS=(
  "public/images/projects/padel15/padel15.gif"
  "public/images/projects/maisondutemps/maisondutemps.gif"
  "public/images/projects/uptoo/uptoo.gif"
  "public/images/projects/pharmExecutive/pharmexecutive.gif"
  "public/images/projects/les-yeux-detectives/les-yeux-detectives.gif"
)

for gif in "${GIFS[@]}"; do
  if [ -f "$gif" ]; then
    # Nom du fichier MP4
    mp4="${gif%.gif}.mp4"

    echo "📹 Converting: $gif"
    echo "   Size before: $(du -h "$gif" | cut -f1)"

    # Conversion avec ffmpeg
    # -i : input file
    # -movflags faststart : optimise pour le streaming web
    # -pix_fmt yuv420p : compatibilité maximale
    # -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" : assure des dimensions paires
    # -crf 23 : qualité (0-51, plus bas = meilleure qualité)
    # -y : overwrite
    ffmpeg -i "$gif" \
      -movflags faststart \
      -pix_fmt yuv420p \
      -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" \
      -crf 23 \
      -y \
      "$mp4" 2>&1 | grep -E "(frame=|size=|time=)" | tail -1

    if [ -f "$mp4" ]; then
      echo "   ✅ Created: $mp4"
      echo "   Size after: $(du -h "$mp4" | cut -f1)"

      # Calculer le ratio de compression
      size_before=$(stat -f%z "$gif")
      size_after=$(stat -f%z "$mp4")
      ratio=$((100 - (size_after * 100 / size_before)))
      echo "   💾 Saved: ${ratio}%"
      echo ""
    else
      echo "   ❌ Failed to convert $gif"
      echo ""
    fi
  else
    echo "⚠️  File not found: $gif"
    echo ""
  fi
done

echo "✨ Conversion completed!"
