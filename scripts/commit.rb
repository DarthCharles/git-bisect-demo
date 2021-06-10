file = File.read("../src/App.tsx")

(56..100).each do |n|
  new_version = file.gsub(/[0-9]{1,5}\.[0-9]{1,5}\.[0-9]{1,5}/, "0.0.#{n}")
  File.write("../src/App.tsx", new_version)

  system("git add \"../src/App.tsx\" && git commit -m \"Version \"0.0.#{n}\"\"")
end
