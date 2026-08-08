# Rules Notes

The rules engine must remain deterministic and independently testable. Current implemented
rules are limited to movement and rotation:

- `TURN_LEFT` and `TURN_RIGHT` rotate through cardinal facings.
- `MOVE_FORWARD` and `MOVE_BACKWARD` move relative to current facing.
- Wall and out-of-bounds movement is rejected without changing state revision.
- Valid state-changing actions increment the authoritative revision.
