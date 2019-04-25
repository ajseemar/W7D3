json.array! @gifts.map do |gift|
  json.partial! 'api/gifts/gift', gift: gift
end