describe("FrameProvider", function()
{
	describe("when getting frames", function()
	{
		it("should give back xywh for frame by name", function(){
		
			let frameProvider = new FrameProvider();
			
			let spriteSheetMetaData = {
				"franz": 
				{
					"x": 0,
					"y": 0,
					"w": 50,
					"h": 25
				},
				
				"haiko":
				{
					"x": 50,
					"y": 0,
					"w": 40,
					"h": 30
				}		
			}
		
			let actual = frameProvider.getFrameByName("franz", spriteSheetMetaData);
			
			expect(actual).toBe(spriteSheetMetaData["franz"]);
		});
		
		it("should give back xywh for frames by different sizes", function(){
			
			let frameProvider = new FrameProvider();
			
			let spriteSheetMetaData = {
					"frames":[
					{
						"x": 0,
						"y": 0,
						"w": 50,
						"h": 25
					},
					{
						"x": 50,
						"y": 0,
						"w": 40,
						"h": 30
					}
				]
			}
		
			let actual = frameProvider.getFrameByIndex(1, spriteSheetMetaData);
			
			expect(actual).toBe(spriteSheetMetaData.frames[1]);
		});
		
		it("should give back xywh for frames of same sizes", function(){
			let frameProvider = new FrameProvider();
			
			let spriteSheetMetaData = {
					"w": 30,
					"h": 50,
					"numberOfFrames": 24
			}
			
			let actual = frameProvider.getFrameByUniformSize(spriteSheetMetaData.w, spriteSheetMetaData.h, 0);
			expect(actual).toEqual({"x": 0, "y": 0, "w": 30, "h": 50})
			
			actual = frameProvider.getFrameByUniformSize(spriteSheetMetaData.w, spriteSheetMetaData.h, 1);
			expect(actual).toEqual({"x": 30, "y": 0, "w": 30, "h": 50})
			
			actual = frameProvider.getFrameByUniformSize(spriteSheetMetaData.w, spriteSheetMetaData.h, 3);
			expect(actual).toEqual({"x": 90, "y": 0, "w": 30, "h": 50})
			
		});
	});
});