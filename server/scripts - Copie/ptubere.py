import yt_dlp
import csv
import re
def format_duration(seconds):
    hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    seconds = seconds % 60
    if hours > 0:
        return f"{hours:02d}:{minutes:02d}:{seconds:02d}"
    else:
        return f"{minutes:02d}:{seconds:02d}"

url_video = "https://www.youtube.com/watch?v=jC3neyEODmA&list=PLawKOZJF6P4YWuRXIuWmRIH3Fwuf0o2hv&index=56&pp=iAQB"

match = re.search(r'list=([^&]+)', url_video)
if match:
    playlist_id = match.group(1)
    playlist_url = f"https://www.youtube.com/playlist?list={playlist_id}"
    print(playlist_url)

ydl_opts = {
    'outtmpl': '%(title)s.%(ext)s',
    'noplaylist': False,
    'extract_flat': True,
}

with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    info = ydl.extract_info(playlist_url, download=False)

with open('playlist.csv', 'w', newline='', encoding='utf-8') as csv_file, \
     open('playlist.txt', 'w', encoding='utf-8') as txt_file:
    csv_writer = csv.writer(csv_file)
    csv_writer.writerow(["Index", "Video ID", "Titre", "Durée", "Durée (secondes)"])

    for index, entry in enumerate(info['entries'], start=1):
        try:
            video_url = f"https://www.youtube.com/watch?v={entry['id']}"
            with yt_dlp.YoutubeDL({'noplaylist': True}) as ydl_video:
                video_info = ydl_video.extract_info(video_url, download=False)
                title = video_info['title']
                duration = video_info['duration']
                print(title)
                print(f" - Vidéo {index}/{len(info['entries'])}: {title}")
                csv_writer.writerow([index, entry['id'], title, format_duration(duration), duration])
                txt_file.write(f"idvideo {entry['id']} diapo {index} id {entry['id']} title {title} video Duration {format_duration(duration)}\n\n")
        except Exception as e:
            error_message = f"Impossible de traiter la vidéo #{index} (URL: {video_url}): {e}"
            print(error_message)