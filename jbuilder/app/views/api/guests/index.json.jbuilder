json.array! @guests.map do |guest|
  json.partial! "api/guests/guest", guest: guest
end
