param ($i)

ffmpeg -i ($i + '.gif') -c:v libx264 -crf 18 -pix_fmt yuv420p -vf "setpts=PTS-STARTPTS" ($i + '.mp4')